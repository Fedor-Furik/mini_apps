let time = document.getElementById('time')
let frame = document.getElementById('frm')
let ikonka = document.getElementById('ik')
let nazva = document.getElementById('nzv')
let discrip = document.getElementById('sub')
let zogolov = document.getElementById('zgl')
let imgClick1 = document.getElementById('1')
let imgClick2 = document.getElementById('2')
let imgClick3 = document.getElementById('3')
let imgClick4 = document.getElementById('4')
let imgClick5 = document.getElementById('5')

// 1 время 2 описание 3 название видио 4 название канала 5 аватарка

let i1 = ["2021-05-13T19:42:37Z","Идея, подхваченная Clubhouse далеко не нова. К моменту выхода этого приложения существовало огромное количество ...","Stereo App: приложение для ведения подкастов и голосовых стримов. Аналог Clubhouse",'Теплица социальных технологий',"https://yt3.googleusercontent.com/ytc/AL5GRJW5e_XSbOwWxLdJtZ29FV56vvh_61Q8R8GVgrds=s176-c-k-c0x00ffffff-no-rj-mo"]
let i2 = ["2021-11-13T06:00:25Z","Роман был задуман Жюлем Верном в начале 1864 года. На идею произведения его вероятно навели беседы с известным ...","ЖЮЛЬ ВЕРН - ПУТЕШЕСТВИЕ К ЦЕНТРУ ЗЕМЛИ","Читает Юрий Гуржий","https://yt3.googleusercontent.com/xCM5IwApKyUiM8ssIy8SQgkbBzK2ATqAX_xjfjPGCW01YJ947IFskejgSo1GTIKKl6tAgIEHuns=s88-c-k-c0x00ffffff-no-rj"]
let i3 = ["2020-06-01T12:58:05Z","Создание различных юридических моделей (сценариев), например, протекания одного и того же судебного процесса по ...","Моделирование","Денис Струков","https://yt3.googleusercontent.com/ytc/AL5GRJUsjHdkjv3OWa2u4yjmGAGAUFYOji8vulNbGQ=s88-c-k-c0x00ffffff-no-rj"]
let i4 = ["2020-06-11T05:20:10Z","Приветствуем Вас на канале Эгида групп в нашем образовательным центре! В данном ролике речь пойдет о том, как ...","Как настроить ЯндексДирект | Инструкция для специалистов мебельного рынка","EGIDA",'https://yt3.googleusercontent.com/ytc/AL5GRJXRrWTlQHIgJkSatGpbbxd1DM4niCTCrLH9vKTN2A=s88-c-k-c0x00ffffff-no-rj']
let i5 = ["2020-11-16T16:47:50Z","В этом видео я покажу как переводить плагины в Minecraft. Вы сможете осуществить перевод плагинов Майнкрафт на ...","Как Переводить Плагины Майнкрафт | Перевод Плагинов Майнкрафт | Русификация","Raidark",'https://yt3.googleusercontent.com/ytc/AL5GRJVgtl8dy-lJS07x2TljLlWyP_cy3uXGam9DLcFRRQ=s176-c-k-c0x00ffffff-no-rj-mo']


let jj = [imgClick1,imgClick2,imgClick3,imgClick4,imgClick5]

window.addEventListener('click', (event) => {
  jj.forEach(element => {
    if(element == event.target){
        let imgSrc = element.getAttribute('alt')
        time.textContent = ""
        ikonka.removeAttribute('src')
        nazva.textContent = ""
        discrip.textContent = ""
        zogolov.textContent = ""
        if(imgSrc == 'https://www.youtube.com/embed/TDVxEywlaGk'){ 
          time.textContent = i1[0]
          ikonka.setAttribute('src', i1[4])
          nazva.textContent = i1[3]
          discrip.textContent = i1[1]
          zogolov.textContent = i1[2]     
        } else if (imgSrc == 'https://www.youtube.com/embed/sGVnx4oC3yI') {
          time.textContent = i2[0]
          ikonka.setAttribute('src', i2[4])
          nazva.textContent = i2[3]
          discrip.textContent = i2[1]
          zogolov.textContent = i2[2]   
        } else if (imgSrc == 'https://www.youtube.com/embed/X9jgRuSwcgw') {
          time.textContent = i3[0]
          ikonka.setAttribute('src', i3[4])
          nazva.textContent = i3[3]
          discrip.textContent = i3[1]  
          zogolov.textContent = i3[2]  
        } else if (imgSrc == 'https://www.youtube.com/embed/q8w-tXDhXJw') {
          time.textContent = i4[0]
          ikonka.setAttribute('src', i4[4])
          nazva.textContent = i4[3]
          discrip.textContent = i4[1]
          zogolov.textContent = i4[2]    
        } else if (imgSrc == 'https://www.youtube.com/embed/lCYg20xm_O8') { 
          time.textContent = i5[0]
          ikonka.setAttribute('src', i5[4])
          nazva.textContent = i5[3]
          discrip.textContent = i5[1]
          zogolov.textContent = i5[2]   
        }
        frame.removeAttribute
        frame.setAttribute('src', imgSrc)
        localStorage.srcc = imgSrc
    }
  })
})

