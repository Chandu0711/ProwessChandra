import React from "react";
import './CSS/navbar.css';
function Navbar() {
    return (
                <div class="nav-ultimate">
                    <nav class="navbar navbar-expand-lg  bg-info-subtle">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">ChandraReddy</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/user">User</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/scoreboard">ScoreBoard</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/challenges">Challenges</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Profile
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="/login">Login</a></li>
                                            <li><a class="dropdown-item" href="/signup">Signup</a></li>
                                            <li><a class="dropdown-item" href="#">Settings</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </nav>
                </div>
    );
};
export default Navbar;
