import React from "react";

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="products">
                <div className="producto"><h3>Productos</h3>
                    <div class="info">
                        <h4>Sueter</h4>
                        <img
                            className="d-block w-100"
                            src="img/productos/1.jpg"
                            alt="" />
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed dolor eos aliquid quia
                            exercitationem perferendis. Odio, ea totam ad explicabo mollitia ipsam ex veritatis! Nihil
                            suscipit dolorem illum sint.</h5>
                    </div>
                    <div className="producto">
                        <div className="info">
                            <h4>Mitones</h4>
                            <img
                                className="d-block w-100"
                                src="img/productos/2.jpg"
                                alt="" />

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed dolor eos aliquid
                                quia exercitationem perferendis. Odio, ea totam ad explicabo mollitia ipsam ex
                                veritatis! Nihil suscipit dolorem illum sint.</h5>
                        </div>
                    </div>
                    <div className="producto">

                        <div className="info">
                            <h4>Sueter</h4>

                            <img
                                className="d-block w-100"
                                src="img/productos/3.jpg"
                                alt="" />
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sed dolor eos aliquid
                                quia exercitationem perferendis. Odio, ea totam ad explicabo mollitia ipsam ex
                                veritatis! Nihil suscipit dolorem illum sint.</h5>
                        </div>

                    </div>
                </div>


            </div>

        </main>
    );
}

export default NosotrosPage;