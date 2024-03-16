import { useState, useEffect } from 'react'

function Scene() {
    const [formData, setFormData] = useState({
        place: "",
        location: "",
        link: "",
        name: ""
    });

    function listen(event) {
        let { name, value } = event.target;
        setFormData((old) => ({
            ...old,
            [name]: value,
        }));
    }

    const [buttonClicked, setButtonClicked] = useState(false)

    function sub(event) {
        if (event && event.preventDefault) {
             event.preventDefault(); 
        }
        setButtonClicked(true)
        
        const key = "OCGNvA13uV8eUvAoE5YuSsrQamdF-SMLIAaJHuuv6qc";
        const apiUrl = `https://api.unsplash.com/photos/random?query=${formData.place},${formData.location}&client_id=`;

        fetch(apiUrl + key)
            .then(resp => resp.json())
            .then(data => {
                setFormData((old) => ({
                    ...old,
                    link: data.urls.regular,
                    name: data.location.name
                }));
            });
    }

    useEffect((event) => {
        // Fetch data from API when component mounts
        //sub(event);
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <main>
            <form className='form1' onSubmit={sub}>
                <label className='lab'>Search for your favourite Wallpaper !!</label>
                <div className='in-flex'>
                    <div>
                        <label className='lab11' htmlFor='lText'>Place</label>
                        <input className='lText' name='place' type='text' placeholder='Place' onChange={listen} value={formData.place} />
                    </div>
                    <div>
                        <label className='lab22' htmlFor='rText'>Preferred landscape (optional)</label>
                        <input className='rText' name='location' type='text' placeholder='Landscape' onChange={listen} value={formData.location} />
                    </div>
                </div>
                <button type="submit" className='button1'>Generate a Wallpaper 🖼</button>
            </form>
            {buttonClicked && <div className='sub-main' >
                <div className='img-div'>
                    <img className='img' src={formData.link} alt="Generated wallpaper"></img>
                </div>
                <div className='desc'>
                    <p>Location : {formData.name}</p>
                </div>
            </div>
            }
        </main>
    );
}

export default Scene;
