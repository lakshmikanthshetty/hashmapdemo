import React, { useState } from "react";

const DynaumicComponent = () => {
   return <div>This is dynaumically added compnent</div>
}

const DynaumicComponentContainer = () => {
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        setShowComponent(true);
    };

    return(
        <div>
            <button onClick={handleClick}>Add Component</button>

            <div>
                (showComponent && <DynaumicComponent />)
            </div>
        </div>

    );
}

export default DynaumicComponentContainer;