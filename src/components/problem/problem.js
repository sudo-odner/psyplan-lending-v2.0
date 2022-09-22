import Mini_problem from './mini-problems/mini-problem';
import './problem.css'


function Problem(){
    return(
        <div className='Problem'>
            <div className='Problem-object'>
                <div className='Problem-first'>
                    <p className='Problem-txt-header WH'>Проблема</p>
                    <p className='Problem-txt-main WH'>Психотерапия – довольно сложный процесс, требующий мотивации, последовательности и глубокой вовлечённости как психотерапевта, так и клиента.</p>
                    <p className='Problem-txt-down BR'>Однако</p>
                </div>
                <div className='Problem-second'>
                    <p className='Problem-txt-they'>Клиент</p>
                    <div className='Problem-txt-about-they'>
                        {Mini_problem('Непоследовательность', '(желание прекратить работу при первых же успехах в терапии) ведёт к неэффективной спешке')}
                        {Mini_problem('Непонимания эмоций', 'Сложно объяснить своё состояние словами при встрече из-за непонимания своих эмоций')}
                        {Mini_problem('Открытость', 'Тяжело открыться специалисту из-за тревожности')}
                    </div>
                    <p className='Problem-txt-they'>Психотерапевт</p>
                </div>
            </div>
        </div>
    )
}

export default Problem;