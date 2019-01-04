import React,{Component} from "react";

class MimeGenerator extends Component{
    constructor(){
        super();
        this.state={
            randomImg:"http://i.imgflip.com/1big.jpg",
            topText:"",
            bottomText:"",
            allMemeImgs:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response=> response.json())
        .then(response=>{
            const {memes} = response.data;
            this.setState({allMemeImgs:memes});
        });
         
    }
    handleChange(event){
        const{name, value} = event.target;
        this.setState({[name]:value});

    }

    handleSubmit(event){
        event.preventDefault();
        //Get a random int(index in an array)
        const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        //Get the meme from that index
        const randomMemeImg = this.state.allMemeImgs[randomNum].url;
        //Set "randomImg" to the ".url" of the grabbed item
        this.setState({randomImg: randomMemeImg});

    }
    render(){
        return(
            <div>
                <h1>Mime Generator Section</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="topText" placeholder="Top text"value={this.state.topText} onChange={this.handleChange} />
                    <input type="text" name="bottomText" placeholder="Bottom text"value={this.state.bottomText} onChange={this.handleChange} />
                    <button>Generate</button>
                </form>
                <br/>
                <hr/>
                <h1> Your Text </h1>
                <div>
                    <img src={this.state.randomImg} alt=""/>
                    <p>Top text: {this.state.topText}</p>
                    <p>Bottom text: {this.state.bottomText}</p>
                </div>
            </div>
        );
    }
}

export default MimeGenerator;