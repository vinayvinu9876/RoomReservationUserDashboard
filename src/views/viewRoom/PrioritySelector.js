import React, { useEffect } from 'react';
import {
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from 'reactstrap';

import { useDispatch,useSelector } from 'react-redux';
import {fetchPriority} from 'store/priority/index';

const PrioirtySelector = ({selected,onChange}) => {

    const dispatch = useDispatch();

    const priorityData = useSelector(state=>state.priority.priorityData);

    let highlightText = "Select Priority";
    let descriptionText = "";

    useEffect(()=>{
        dispatch(fetchPriority());
    },[]);

    if(selected){
        highlightText = null;

        for(let i=0;i<priorityData.length;i++){
            if(selected === priorityData[i]["name"]){
                highlightText = priorityData[i]["name"];
                descriptionText = priorityData[i]["desc"];
            }
        }

        if(!highlightText){
            highlightText = "Select Priority";
            descriptionText = null;
        }
    }

    return (
        <UncontrolledDropdown group>
            <DropdownToggle caret color="primary">{highlightText}</DropdownToggle>
            {
                (priorityData) && (priorityData.length > 0 ) &&
                <DropdownMenu>
                    {
                        priorityData.map((val,index)=>{
                            return (
                                <DropdownItem 
                                    href="#pablo" 
                                    key={"priorInddex"+index} 
                                    onClick={
                                        e => {
                                            e.preventDefault();
                                            onChange(val["name"]);
                                        }
                                    }
                                >
                                    {val["name"]}
                                </DropdownItem>
                            )
                        })
                    }
                </DropdownMenu>
            }
            <p style={{fontSize:12,marginLeft:"5px",color:"black"}}>
                {descriptionText}
            </p>
        </UncontrolledDropdown>
    );
}

export default PrioirtySelector;