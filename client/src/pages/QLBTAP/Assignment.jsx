import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '~~/pages/assignment/Assignment.scss';
import { useNavigate, Link } from 'react-router-dom';
import { FiSearch } from '@react-icons/all-files//fi/FiSearch';
import { FcInspection } from 'react-icons/fc';

import moment from 'moment/moment';

const Assignment = () => {
    const navigate = useNavigate();
    const [assignment, setAssignment] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8081/api/assignment/')
            .then((res) => setAssignment(res.data.assignmentData.rows))
            .catch((err) => console.error(err));
    }, []);

    // const ClassCount = Class.length;
    // const ClassCount = Class.length;

    return (
        <div className="container-fluid">
            <div className="row header-bt">
                <div className="ml-3">
                    <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group position-relative">
                            <input
                                type="text"
                                className="form-control bg-light small input-search"
                                placeholder="Tìm kiếm"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <div className="input-group-append">
                                <button className="btn position-absolute icon-search" type="button">
                                    <FiSearch />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card shadow mb-4 height-table">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Bài Tập Đã Giao</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive"></div>
                    <table class="table table-hover" id="dataTable" width="100%" cellspacing="0">
                        <thead className="text-center">
                            <th></th>
                            <th>Tên</th>
                            <th>Từ Ngày</th>
                            <th>Đến Ngày</th>
                            <th>Giao Cho</th>
                            <th>Trạng Thái</th>
                            <th>Số Bài Đã Nộp</th>
                            <th>Tiêu chí</th>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody className="text-center">
                            {assignment.map((data, i) => (
                                <tr key={i}>
                                    <td>
                                        <i class="fa-solid fa-folder icon-folder"></i>
                                    </td>
                                    <td>{data.assignment_name}</td>
                                    <td>{moment(data.start_date).format('DD-MM-YYYY')}</td>
                                    <td>{moment(data.deadline).format('DD-MM-YYYY')}</td>
                                    <td>{data.of_class}</td>
                                    <td>20</td>
                                    <td>30</td>
                                    <td>
                                        <Link className="btn" to={`/criteria`}>
                                            <FcInspection />
                                        </Link>
                                    </td>

                                    <td>
                                        <Link className="btn" to={`/assignment/edit-assignment/${data.id}`}>
                                            <i class="fa-solid fa-pen-to-square icon-edit"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className="btn">
                                            <i class="fa-solid fa-trash icon-delete"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Assignment;
