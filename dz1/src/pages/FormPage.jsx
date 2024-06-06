import React, {useState} from 'react';

const FormPage = () => {
    const [bodyInput, setBodyInput] = useState('')
    const [titleInput, setTitleInput] = useState('')
    const [blockArr , setBlockArr ] = useState([])


    const postCreate = (event) =>{
        event.preventDefault()
        setBlockArr([ titleInput, bodyInput, ...blockArr])
    }

    return (
        <>
            <form onSubmit={postCreate}>
                <input type="text" placeholder='Введите title' name='title' onInput={(e) =>setTitleInput(e.target.value)}/>
                <input type="text" placeholder='Введите body' name='body' onInput={(e) =>setBodyInput(e.target.value)}/>
                <button type='submit'>Отправить</button>
            </form>

            <>
                {
                    blockArr.map((elem, idx ) =>[
                        <div key={idx}>
                            {elem}
                        </div>

                    ])
                }
            </>

        </>
    );
};

export default FormPage;