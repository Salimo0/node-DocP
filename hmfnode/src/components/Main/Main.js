import React from 'react';
import './Main.css';

function Main() {
    return (
        <div>
            <main>
                <section>
                    <img class="png" src="https://play-lh.googleusercontent.com/Jl6hJSPZRXhugtjHj0sWeX_IE--hBhHA8GL9RU3N5suklM2x1l01ulh8xSAV_eyE1A=s256-rw" alt="logo" height="50px" width="auto"/>
                        <h1 id="h1h">Making the healthcare experience more human</h1>
                </section>
                <section class="ph">
                    <p class="ph1">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey
                        should be enjoyable, and that's why we
                        are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
                    <p class="ph2">
                        We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their
                        online presence, but also to devote their time to what really matters: their patients.
                    </p>
                </section>
                <div class="grid-container">
                    <div class="item1">
                        <h1>For patients</h1>
                        <p>Find a doctor, book a visit and solve any health-related doubt</p>
                    </div>
                    <div class="item2">
                        <h1>For doctors</h1>
                        <p>Save time managing visits and cut no-shows by half</p>
                    </div>
                    <div class="item3">
                        <h1>For clinics</h1>
                        <p>Deliver an exceptional patient experience in your clinic</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Main;
