import React, { useEffect, useState } from 'react';
import Aheader from '../Acoman/Aheader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Aabout() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [view, setView] = useState(null);
  const [update, setUpdate] = useState({});
  
  // Redirect if not logged in
  useEffect(() => {
    if (!localStorage.getItem("Aname")) {
      navigate('/alogin');
    }
  }, [navigate]);

  // Fetch trainer data
  const teamdata = async () => {
    try {
      const res = await axios.get("http://localhost:3000/trainer");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    teamdata();
  }, []);

  // Handle edit form changes
  const onHandleChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  // Submit updated data
  const updateData = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/trainer/${update.id}`, update);
      teamdata(); // Refresh data
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div>
      <Aheader />
      <div className="container my-5">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th className='px-5'>Name</th>
              <th>Profession</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={user.img} alt="trainer" style={{ width: 105, height: 85 }} className="rounded-circle" />
                    <div className="ms-4">
                      <p className="fw-bold mb-1">{user.name}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{user.profe}</p>
                  <p className="text-muted mb-0">{user.desc}</p>
                </td>
                <td>
                  <button className="btn btn-info btn-sm me-2" data-bs-toggle="modal" data-bs-target="#viewModal" onClick={() => setView(user)}>View</button>
                  <button className="btn btn-success btn-sm me-2" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => setUpdate(user)}>Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      <div className="modal fade" id="viewModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Trainer Details</h5>
              <button className="btn-close" data-bs-dismiss="modal" />
            </div>
            <div className="modal-body">
              {view && (
                <>
                  <img src={view.img} alt="View" className="img-fluid mb-3" />
                  <h5>{view.name}</h5>
                  <p><strong>Profession:</strong> {view.profe}</p>
                  <p><strong>Description:</strong> {view.desc}</p>
                  <p><strong>Title:</strong> {view.title}</p>
                  <p><strong>Day:</strong> {view.day} | <strong>Time:</strong> {view.time}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <form onSubmit={updateData}>
              <div className="modal-header">
                <h5 className="modal-title">Edit Trainer</h5>
                <button className="btn-close" data-bs-dismiss="modal" />
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input name="name" className="form-control" placeholder="Name" value={update.name || ''} onChange={onHandleChange} />
                  </div>
                  <div className="col-md-6">
                    <input name="title" className="form-control" placeholder="Title" value={update.title || ''} onChange={onHandleChange} />
                  </div>
                  <div className="col-md-6">
                    <input name="day" className="form-control" placeholder="Day" value={update.day || ''} onChange={onHandleChange} />
                  </div>
                  <div className="col-md-6">
                    <input name="time" type="time" className="form-control" value={update.time || ''} onChange={onHandleChange} />
                  </div>
                  <div className="col-12">
                    <input name="img" className="form-control" placeholder="Image URL" value={update.img || ''} onChange={onHandleChange} />
                  </div>
                  <div className="col-12">
                    <textarea name="desc" className="form-control" placeholder="Description" value={update.desc || ''} onChange={onHandleChange}></textarea>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">Update</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aabout;
