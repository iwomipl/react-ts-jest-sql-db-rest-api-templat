import React, {ChangeEvent} from "react";

import './Input.css';

interface Props {
    className: string;
    text: string;
    type: string;
    value: string | number;
    potentialBr?: boolean;
    function:(e: ChangeEvent<HTMLInputElement>)=> void;
}

export const Input = (props: Props)=>(
    <label className={props.className}>
        {props.text}:{props.potentialBr && <br/>}
        <input
            type={props.type}
            onChange={props.function}
        />
    </label>
)