import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    console.log("constructor()");
    super();
   this.state = {
   fullName: "Gomycode",
   bio:"We train the next tech generation in the most recent technologies and jobs of the future to prepare them for the professional world and strengthen their employability",
   imgSrc:"image.jpg",
   profession:"I am a student in gomycode",
   show:true,
   interval:null,
   count:0
 };
}
componentDidMount(){ 
  console.log("componentDidMount()")
   this.setState({
     interval: setInterval(()=>{
     this.setState({count: this.state.count+1});
    },1000),
  });
}
componentDidUpdate(){
  console.log("componentDidUpdate()")
}
visibility=()=>{
  this.setState({
    show: !this.state.show
  })

}
  render(){
    console.log("render()");
    return (
      <>
      <div className="profile">
         {this.state.show ?
            (<><img src={this.state.imgSrc} alt="Myphoto"></img>
            <h2>{this.state.fullName}</h2>
            <p>{this.state.bio}</p>
            <p className="prof">{this.state.profession}</p>
            <div className ="logos">
                <a href="https://gomycode.com/TN-FR/home" target="blanc">
                    <img  src="gomycode.jpg" alt="gomycode"></img>
                    </a>
                    <a href="https://www.instagram.com/gomycode/" target="blanc">
                    <img  src="instagram.png" alt="instagram"></img>
                    </a>
                    <a href="https://www.facebook.com/gomycode" target="blanc"><img  src="facebook.png" alt="facebook"></img></a>
                    <a href="https://www.youtube.com/c/GoMyCode" target="blanc">
                      <img src="youtyube.png" alt="youtyube" target="blanc"></img>
                      </a>
                    </div>
                    <h3>{this.state.count}</h3>
                    </>) : (<h2>Click button to show profile</h2>)
    } 
          </div>
          <button onClick={this.visibility}>{this.state.show ? "Hide profile" : "Show profile" }</button> 
          </>
    );
    }
  }
  
  export default App;