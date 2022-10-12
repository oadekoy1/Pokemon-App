const React = require('react');

class Show extends React.Component {
    render() {
        const poke = this.props.poke
        // console.log("HEREEEEEEE", this.props.pokemon);
        return (
            <div>
                <div style={styles.myStyle}>My First React Component!</div>
                <h1>Gotta Catch 'Em All</h1>
                <h2 style={styles.item}>{poke.name} </h2>
                <a>
                    <img src = {`${poke.img}.jpg`} width='300'/>
                </a>

            </div>
        )
    }
}

const styles = {
    myStyle: {
        color: '#ffffff',
        backgroundColor: '#000000',
        textTransform: 'capitalize'
    }, 

    item: {
        padding: '10px',
        textDecoration: 'none',
        listStyleType: 'none',
        textTransform: 'capitalize'
    }
};











module.exports = Show