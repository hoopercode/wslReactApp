import React from "react";
import "./AddSurfer.scss";

const AddSurfer = () => {
  return (
    <div className="addSurfer" >
  <h1 className="addSurfer__header">Add a Surfer</h1>
  <h2 className="addSurfer__sub-header">Create a new surfer from outside the top 34</h2>
  <form className="form" action="#">
    
    <fieldset className="ui-input">
      <input type="text" id="firstName" tabindex="0" />
      <label for="firstName">
        <span data-text="firstName">First Name</span>
      </label>
    </fieldset>

    <fieldset className="ui-input">
      <input type="text" id="lastName" tabindex="0" />
      <label for="lastName">
        <span data-text="lastName">Last Name</span>
      </label>
    </fieldset>
    
    <fieldset className="ui-input">
      <input type="number" id="height" tabindex="0" />
      <label for="height">
        <span data-text="height">Height</span>
      </label>
    </fieldset>

    <fieldset className="ui-input">
      <input type="number" id="age" tabindex="0" />
      <label for="age">
        <span>Age</span>
      </label>
    </fieldset>
    
    <fieldset className="ui-input">
      <input type="number" id="ranking" tabindex="0" />
      <label for="ranking">
        <span data-text="ranking">Ranking</span>
      </label>
    </fieldset>
    
    <fieldset className="ui-input">
      <input type="number" id="rookieYear" tabindex="0"min="1900" max="2099" step="1"  />
      <label for="rookieYear">
        <span>Rookie Year</span>
      </label>
    </fieldset>

     <fieldset className="ui-input">
      <input type="text" id="stance" tabindex="0"  />
      <label for="stance">
        <span>Stance</span>
      </label>
    </fieldset>
    
    <fieldset className="ui-input">
      <input type="url" id="imgUrl" tabindex="0"min="1900" max="2099" step="1"  />
      <label for="imgUrl">
        <span>Link to Head Shot</span>
      </label>
    </fieldset>
    <div class="form-footer">
      <button class="btn">Add Surfer</button>
    </div>
  </form>
</div>
  );
};

export default AddSurfer;
