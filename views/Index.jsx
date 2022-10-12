const React = require('react');

class Index extends React.Component {
    render() {
        const {pokemon} = this.props
        // console.log("HEREEEEEEE", this.props.pokemon);
        return (
            <div>
                <div style={styles.myStyle}>My First React Component!</div>
                <h1>See All The Pokemons!!!!</h1>
                <ul>
                    {
                        pokemon.map((poke, idx) => 
                        (
                         <li style={styles.item} key={idx}>
                            {" "}
                            <a style={styles.item} href={`/pokemon/${idx}`}>{poke.name} </a> 
                            <br/>
                            <a href={`/pokemon/${idx}`}>
                                <img src = {`${poke.img}.jpg`} width='300'/>
                            </a>
                         </li>   
                        ))
                    }
                </ul>

            </div>
        )
    }
}

module.exports = Index





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
