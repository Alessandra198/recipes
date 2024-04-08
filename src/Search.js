import React from "react";
import "./Search.css";

export default function Search() {
    return (
        <div className="Search">
            <form>
                <input type="search" placeholder="Ex. chicken, carbonara.." className="input-search"/>
                <input type="button" value="Search" className="input-button"/>
            </form>
        </div>
    );
}