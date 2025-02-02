import './Cube.css'

export const Cube = ({isVisibleCube}) => {

    return(
    <aside id="cubeContainer" style={{display: isVisibleCube ? 'flex' : 'none'}}>   
        <div className="cubeLine"></div>
        <div id="placeForCube">
            <div id="stageForCube">
                <div id="cube">
                    <div className="wall front">NB</div>
                    <div className="wall back"></div>
                    <div className="wall left"></div>
                    <div className="wall right"></div>
                    <div className="wall top"></div>
                    <div className="wall bottom"></div>
                </div>
            </div>
        </div>  
        <div className="cubeLine"></div>
    </aside>
    )
}