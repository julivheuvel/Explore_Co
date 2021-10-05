import React from "react";
import { Link } from "@reach/router";

// web-layout-components
import NavBar from '../web-layout-components/NavBar';

const Index = () => {


    return (
        <div>
            <div className="index">
            <NavBar />
                <div className="index-content">
                    <div>
                        <Link to="/login" className="start-exploring">START EXPLORING</Link>
                    </div>
                    <div className="d-flex">
                        
                        <div className="index-quote">" icon</div>
                        <div>
                            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente libero veniam, nostrum a, dignissimos, quod maiores alias officia labore hic itaque commodi velit odit autem aspernatur beatae provident tempora consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam fuga, dolor harum reprehenderit magni quas numquam aperiam facere temporibus soluta similique mollitia quis. Fugit eaque et vel ex eligendi!</div>
                            <div className="d-flex">
                                <div>icon image</div>
                                <div>
                                    <div>john adams</div>
                                    <div>grand rapids</div>
                                </div>
                            </div>
                            <div>learn more button</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Index;