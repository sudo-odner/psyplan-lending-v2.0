import './mini-problem.css'

function Mini_problem(first_txt, second_txt){
    return(
        <div className='Mini-problem'>
            <p className='Mini-problem-txt'>
                <span className='Mini-problem-txt-first'>{first_txt}</span>
                <br/>
                <span className='Mini-problem-txt-second'>{second_txt}</span>
            </p>
        </div>
    )
}

export default Mini_problem;