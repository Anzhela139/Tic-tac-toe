<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiVolumeLow } from '@mdi/js';
// import { changeAudio } from '../store/audio'
// import { changeAudios } from '../store/audios'
import { mdiVolumeHigh } from '@mdi/js';
import { mdiVolumeMedium } from '@mdi/js';
import { mdiVolumeOff } from '@mdi/js';
// import AudioControls from '../audioControls.vue';

import { mdiTuneVerticalVariant } from '@mdi/js';
import { randomizeArray } from '../utils'
// const audio = useSelector(state => state.audio)
// const audios = useSelector(state => state.audios)
const audioDOM = useRef(null);

// const dispatch = useDispatch()
// const [isActive, setActive] = useState(false)
// const [currI, setCurrI] = useState(0)
// const [randomMusic, setrandomMusic] = useState(randomizeArray(audios.value))
// const [srcAudio, setSrcAudio] = useState('')
// const [length, setLength] = useState(0)

const path = `../../assets/music/`

// useEffect(() => {
//     setSrcAudio(randomMusic[currI])
//     // playAudio()
//     //eslint-disable-next-line
// }, [])

// useEffect(() => {
//     // setSrcAudio(randomMusic[currI])
//     // playAudio()
//     //eslint-disable-next-line
// }, [audio])

const playAudio = (audio) => {

    // audioDOM.current.src = `${path}${audios.value[audio.value]}`


    // var audiovar = new Audio(audios.value[audio]);
    // console.log(audiovar)
    // console.log(audiovar.networkState)
    // audiovar.play();
    setSrcAudio(audios.value[audio])
    console.log(srcAudio)
    console.log(audios.value[audio], audio)
    audioDOM.current.pause()
    audioDOM.current.load()
    audioDOM.current.addEventListener(
        'canplaythrough',
        function (params) {
            this.play()
            handleDuration(this.duration)
        },
        false,
    )

}

const reload = useCallback(() => {
    try {
        setActive(true)
        setCurrI(currI + 1)
        const song = randomMusic[currI]
        // setSrcAudio(song)
        // audioDOM.current.src = `${path}${song}`
        console.log(audioDOM.current)
        audioDOM.current.pause()
        audioDOM.current.load()
        audioDOM.current.addEventListener(
            'canplaythrough',
            function (params) {
                this.play()
                handleDuration(this.duration)
            },
            false,
        )
    } catch (error) {
        console.log(error)
    }
    //eslint-disable-next-line
}, [currI, srcAudio, audioDOM])

const stopMusic = (event) => {
    audioDOM.pause()
    audioDOM.currentTime = 0
    setActive(false)
}

const volumeUp = (event) => {
    if (audioDOM.volume < 1) audioDOM.volume += 0.1
}

const volumeDown = (event) => {
    if (audioDOM.volume > 0) audioDOM.volume -= 0.1
}

const handleAudio = (event) => {
    event.preventDefault()
    const audiosrc = event.target?.value
    console.log(event.target?.value)
    dispatch(changeAudio(audiosrc));
    console.log(audio)
    // playAudio(audios.valuerc)
}

const handleDuration = (len, cur) => {
    const duration = len / 100
    setTimeout(() => {
        console.log(duration)
    }, 1000)
}
</script>

<template>
    <div class="wrapper-sound">
        <md-outlined-select label='Select audio' @input={handleAudio}>
            <md-select-option value='' selected>
                <div slot="headline"></div>
            </md-select-option>
            {audios.value.map(function (object, i) {
            return <md-select-option value={object.id} key={object.id}>
                <div slot="headline">{object.title}</div>
            </md-select-option>
            })}
        </md-outlined-select>
    </div>
</template>

<style scoped></style>
