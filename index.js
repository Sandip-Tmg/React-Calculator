class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            expression:'',
            answer:'0'
        };
        this.clear= this.clear.bind(this);
        this.getAnswer = this.getAnswer.bind(this);
    }

    handleDisplay(symbol){
        this.setState(prev=>({
            expression:prev.expression+symbol,
            answer:symbol
        }))
    }

    clear(){
        this.setState({
            expression:'',
            answer:'0'
        })
    }

    getAnswer(){
        this.setState({
            answer:eval(this.state.expression)
        })
    }

    render(){
        return(
            <div className="container">
                <div className="grid">
                    <div id="display">{this.state.expression}</div>
                    <div id="answer">{this.state.answer}</div>
                    <div onClick={this.clear} className="button" id="clear">AC</div>
                    <div onClick={()=> this.handleDisplay("/")} className="button" id="divide">/</div>
                    <div onClick={()=> this.handleDisplay("*")}className="button" id="multiply">*</div>
                    <div onClick={()=> this.handleDisplay("7")} className="button" id="seven">7</div>
                    <div onClick={()=> this.handleDisplay("8")} className="button" id="eight">8</div>
                    <div onClick={()=> this.handleDisplay("9")} className="button" id="nine">9</div>
                    <div onClick={()=> this.handleDisplay("-")} className="button" id="subtract">-</div>
                    <div onClick={()=> this.handleDisplay("4")} className="button" id="four">4</div>
                    <div onClick={()=> this.handleDisplay("5")} className="button" id="five">5</div>
                    <div onClick={()=> this.handleDisplay("6")}className="button" id="six">6</div>
                    <div onClick={()=> this.handleDisplay("+")} className="button" id="add">+</div>
                    <div onClick={()=> this.handleDisplay("1")}className="button" id="one">1</div>
                    <div onClick={()=> this.handleDisplay("2")} className="button" id="two">2</div>
                    <div onClick={()=> this.handleDisplay("3")} className="button" id="three">3</div>
                    <div onClick={this.getAnswer} className="button" id="equals">=</div>
                    <div onClick={()=> this.handleDisplay("0")} className="button" id="zero">0</div>
                    <div onClick={()=> this.handleDisplay(".")} className="button" id="decimal">.</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));