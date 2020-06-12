import React, {useContext} from 'react'; 

import {formContext} from '../contexts/formContext'; 


export const SmurfForm = () => {

    const {onChange, onSubmit, formValues, setFormValues} = useContext(formContext)

    return(
        <div>
            <form onSubmit={onSubmit}>

            <h3> Name</h3>
            <input onChange={onChange} value={formValues.name} name="name" type="text" />
        
            <h3> Age</h3>
            <input onChange={onChange} value={formValues.age} name="age" type="text" />
    
            <h3> Height</h3>
            <input onChange={onChange} value={formValues.height} name="height" type="text" />
                <button> Add Smurf</button>
            </form>

        </div>
    ) 

}