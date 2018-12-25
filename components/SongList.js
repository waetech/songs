import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList(){
        return this.props.songs.map((song) => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}
                        >
                        Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    
    render(){
        console.log(this.props);
        return <div className="ui render list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    //Taking our data and run props inside our component
    //our state and all data in our redux store
    
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong }) (SongList);