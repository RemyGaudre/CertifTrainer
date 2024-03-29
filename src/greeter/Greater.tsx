import react from 'react';

export interface Props{
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}

function Greater({name, enthusiasmLevel = 1} : Props){

    if(enthusiasmLevel<=0){
        throw new Error("You could be a little more enthusiastic.");
    }


    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
}

class GreaterCo extends react.Component<Props, State>{
    state = {currentEnthusiasm: this.props.enthusiasmLevel || 1};
    onIncrement = () => {
        this.updateEnthusiasm(1);
    };
      onDecrement = () => {
        this.updateEnthusiasm(-1);
    };

    updateEnthusiasm(change: number) {
        this.setState((currentState) => {
          return { currentEnthusiasm: currentState.currentEnthusiasm + change };
        });
    }

    render(){
        const { name } = this.props;

        if(this.state.currentEnthusiasm<=0){
            throw new Error("You could be a little more enthusiastic.");
        }
        return (
          <div className="hello">
            <div className="greeting">
              Hello {name + " from Component " + getExclamationMarks(this.state.currentEnthusiasm)}
            </div>
            <button onClick={this.onDecrement}>-</button>
            <button onClick={this.onIncrement}>+</button>
          </div>
        );
    }
}

export default GreaterCo;

function getExclamationMarks(numChars: number){
    return Array(numChars + 1).join("!");
}