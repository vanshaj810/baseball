import './Container.css'
function Container(){
    return(
      <body>
        
      
        <div className="contain">
        
</div>
<div className="splitScreen">
  <div className="topPane">
<form action="noaction.php">
    
    <input type="text" name="" id="" placeholder="ENTER YOUR NAME" className="glow"/>
 
      <input type="text" name="" id="" placeholder="ENTER YOUR AGE" className="glow" />
 
      <input type="text" name="" id="" placeholder="ENTER YOUR LOCALITY" className="glow" />
   
    <input type="email" name="" id="" placeholder="ENTER YOUR EMAIL" className="glow" />
   
    <input type="text" name="" id="" placeholder="ENTER YOUR PHONE NUMBER" className="glow" />
    <br />
    <input type="submit" value="SUBMIT" />
</form>
  </div>
  <div className="bottomPane">
    <div className="gif">

    </div>
  </div>
</div>

</body>
    );}

export default Container