import './hello.css'
import Hello_img from '../../visual-components/image/hello.png'

function Hello(){
    return(
        <div className='Hello'>
            <div className='Hello-object'>
                <p className="Hello-txt">
                    <span className="BR">Psy</span><br/>
                    <span className="WH">Plan</span>
                </p>
                <img className="Hello-img" src={Hello_img} alt=''></img>
            </div>
        </div>
    )
}

export default Hello;