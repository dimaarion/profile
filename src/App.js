import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './profile.css';
import axios from 'axios';

function App() {
  const [profie, setProfile] = useState([{}]);
  const [lang, setLang] = useState("ru");
  const [displayProfiles, setDisplayProfiles] = useState({ type: false, id: 0 });
  const [displayDescriptions, setDisplayDescriptions] = useState({ type: false, id: 0 });
  const [obj, setObj] = useState([{}]);
  const [save, setSave] = useState(false);

  useEffect(() => {
    if(save){
      axios.post("https://sandaniprim.md/cache/profile/save",
      {
        params: {
          lang: {}
        }
      }).then((response) => console.log(response.data))
    }else{
      axios.get("https://sandaniprim.md/cache/profile",
      {
        params: {
          lang: lang
        }
      }).then((response) => setProfile(response.data))
    }
    

  }, [lang,save])

 



  function brand(prof, e) {
    return <div className='mb-3 border-b-2' key={prof.brandName + prof.lang}>
      <div className='my-1'>
        <div><label htmlFor='nameProfile' >Название бренда</label></div>
        <div className='p-2'><input className='h-8 border-2 border-blue-300' defaultValue={prof.brandName} /></div>
      </div>
      <div className='my-1'>
        <div><label htmlFor='nameProfile' >Класс</label></div>
        <div className='p-2'><input className='h-8 border-2 border-blue-300' defaultValue={prof.class} /></div>
      </div>
      <div className='my-1'>
        <div><label htmlFor='nameProfile' >Видимость</label></div>
        <div className='p-2'><input className='h-8 border-2 border-blue-300' defaultValue={prof.display} /></div>
      </div>
      <div className='my-1'>
        <div><label htmlFor='nameProfile' >Изображение</label></div>
        <div className='p-2'><input className='w-1/2 h-8 border-2 border-blue-300' defaultValue={prof.img} /></div>
      </div>
      <button onClick={() => setDisplayProfiles(displayProfiles.type ? { type: false, id: e } : { type: true, id: e })} className={displayProfiles.type === true && displayProfiles.id === e ? classes.btnLangActive : classes.btnLang}>{displayProfiles.type === true && displayProfiles.id === e ? "Скрыть" : "Показать"}</button>
      {displayProfiles.type === true && displayProfiles.id === e ? prof.profile.map((prof, el) => profiles(prof, el)) : ""}
    </div>
  }

  function profiles(prof, el) {
    return <div key={prof.name} className='ml-10 border-b-2'>
      <div className='my-1'>
        <div><label htmlFor='nameProfile' >Название профиля</label></div>
        <div className='p-2'><input className='h-8 border-2 border-blue-300' defaultValue={prof.name} /></div>
      </div>
      <div className='my-1'>
        <div><label htmlFor='nameProfile' >Класс</label></div>
        <div className='p-2'><input className='h-8 border-2 border-blue-300' defaultValue={prof.class} /></div>
      </div>
      <div className='my-1'>
        <div><label htmlFor='nameProfile' >Видимость</label></div>
        <div className='p-2'><input className='h-8 border-2 border-blue-300' defaultValue={prof.display} /></div>
      </div>
      <div className='my-1'>
        <div><label htmlFor='nameProfile' >Изображение</label></div>
        <div className='p-2'><input className='w-1/2 h-8 border-2 border-blue-300' defaultValue={prof.img} /></div>
      </div>
      <div className='my-1'>
        <div><label htmlFor='nameProfile' >Текст</label></div>
        <div className='p-2'><textarea className='w-1/2 border-2 border-blue-300 h-60' defaultValue={prof.content} /></div>
      </div>
      <button onClick={() => setDisplayDescriptions(displayDescriptions.type ? { type: false, id: el } : { type: true, id: el })} className={displayDescriptions.type && displayDescriptions.id === el ? classes.btnDescriptActive : classes.btnDescript}>{displayDescriptions.type && displayDescriptions.id === el ? "Скрыть" : "Показать"}</button>
      <div className='ml-10'>{displayDescriptions.type && displayDescriptions.id === el ? prof.list.map((l) => descriptions(l)) : ""}</div>
    </div>
  }

  function descriptions(props) {
    return <div key={props.title}>
      <div className='my-1'>
        <div><label htmlFor='nameProfile' >Изображение</label></div>
        <div className='p-2'><input className='w-1/2 h-8 border-2 border-blue-300' defaultValue={props.title} /></div>
      </div>
      <div className='my-1'>
        <div><label htmlFor='nameProfile' >Изображение</label></div>
        <div className='p-2'><input className='w-1/2 h-8 border-2 border-blue-300' defaultValue={props.item} /></div>
      </div>
    </div>
  }
  const classes = {
    btnLang: "w-1/3 p-1 mx-3 text-gray-800 hover:text-gray-100 bg-lime-500 hover:bg-lime-700",
    btnLangActive: "w-1/3 p-1 mx-3 text-gray-100 bg-lime-700 ",
    btnDescript: "w-1/3 p-1 mx-3 text-gray-800 hover:text-gray-100 bg-blue-500 hover:bg-blue-700",
    btnDescriptActive: "w-1/3 p-1 mx-3 text-gray-100 bg-blue-700 ",
  }

  let objects = {
    "sort": 500,
    "lang": "ru",
    "brandName": "new",
    "class": "noActive",
    "display": "",
    "img": "/storage/img/salamander.png",
    "profile": [
      {
        "sort": 500,
        "name": "",
        "class": "active",
        "display": "d-block",
        "content": "",
        "list": [
          {
            "title": "",
            "item": ""
          },

        ],
        "img": "/storage/img/bluevolution_92.png"
      }
    ]
  }


  return (
    <div className="relative flex flex-row profile">
      <div className='basis-1/4'></div>
      <div className='basis-1/2'>
      <div className='mt-3 text-end'>
          <button onClick={() => {
           setSave(true);
          }} className='w-1/3 p-1 mx-3 text-blue-100 bg-blue-700'>Сохранить</button>
          </div>
        {profie.length > 1 ? profie.map((b, i) => brand(b, i)) : ''}
        <div>
          <button onClick={() => {
            profie.push(objects);
            setProfile(profie)
            console.log(profie)
          }} className='w-1/3 p-1 mx-3 text-blue-100 bg-blue-700'>Добавить бренд</button>
          </div>
          
      </div>
      <div className='mt-3 basis-1/4'><button onClick={() => setLang("ru")} className={lang === "ru" ? classes.btnLangActive : classes.btnLang}>ru</button><button onClick={() => setLang("md")} className={lang === "md" ? classes.btnLangActive : classes.btnLang}>md</button></div>


    </div>
  );
}

export default App;
