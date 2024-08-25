import React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react'
import Icon from '@mdi/react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { mdiVolumeLow } from '@mdi/js';
import { changeAudio } from '../store/audio'
import { mdiVolumeHigh } from '@mdi/js';
import { mdiVolumeMedium } from '@mdi/js';
import { mdiVolumeOff } from '@mdi/js';
import { mdiRepeat } from '@mdi/js';
import { mdiShuffleVariant } from '@mdi/js';
import { mdiPlaylistMusic } from '@mdi/js';
import { mdiPlay } from '@mdi/js';
import { mdiPause } from '@mdi/js';
import { mdiSkipNext } from '@mdi/js';
import { mdiSkipPrevious } from '@mdi/js';
import { changeMenu } from '../store/menuSlice.js'
import { changeAudios } from '../store/audios'

import { mdiTuneVerticalVariant } from '@mdi/js';
import { randomizeArray } from '../utils'

const AudioControls = () => {
  const audio = useSelector(state => state.audio)
  const audios = useSelector(state => state.audios)
  const audioDOM = useRef(null);
  const dispatch = useDispatch()
  const [isActive, setActive] = useState(false)
  const [isOnRepeat, setIsOnRepeat] = useState(false)
  const [currI, setCurrI] = useState(0)

  const [ranAudios, setRanAudios] = useState(randomizeArray(audios.value))
  const [srcAudio, setSrcAudio] = useState('')
  const [duration, setDuration] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)


  const playNext = useCallback((forward = true) => {
    try {
      if (!isOnRepeat) {
        const index = audios.value.findIndex(el => el.id === audio.value)
        const newIndex = forward ? index + 1 : index - 1;
        dispatch(changeAudio(audios.value[newIndex]?.id));
      }
    } catch (error) {
      console.log(error)
    }
    //eslint-disable-next-line
  }, [currI, srcAudio, audioDOM])

  const stopMusic = (event) => {
    console.log(audioDOM.current)
    audioDOM.current.pause()
    // audioDOM.current.currentTime = 0
    setIsPlaying(false)
  }

  const resumeMusic = (event) => {
    console.log(audioDOM.current)
    audioDOM.current.play()
    // audioDOM.current.currentTime = 0
    setIsPlaying(true)
  }

  const volumeUp = (event) => {
    if (audioDOM.volume < 1) audioDOM.volume += 0.1
  }

  const volumeDown = (event) => {
    if (audioDOM.volume > 0) audioDOM.volume -= 0.1
  }

  const handleUserDuration = (len, cur) => {

  }

  const playPrevSong = () => {
    playNext(false);
  }

  const playNextSong = () => {
    playNext(true);
  }

  const handleRandomize = () => {
    dispatch(changeAudios(randomizeArray(audios.value)));
  }

  const handleOnRepeat = () => {
    setIsOnRepeat(!isOnRepeat);
  }

  const handleAudio = (event) => {
    event.preventDefault()

    dispatch(changeMenu('Audio'));
}


  const handleDuration = (len, cur) => {
    const currentDuration = len / 100
    setTimeout(() => {
      console.log(currentDuration)
      setDuration(currentDuration)
    }, 1000)
  }

  useEffect(() => {
    const src = audios.value.find(el => el.id === audio.value)
    try {
      setSrcAudio(src)
      audioDOM.current.pause()
      audioDOM.current.load()
      audioDOM.current.addEventListener(
        'canplaythrough',
        function (params) {
          this.play()
          handleDuration(this.duration)
          setIsPlaying(true)
        },
        false,
      )
    } catch (error) {
      console.log(error)
    }
  }, [audio, audios])

  return (
    <>
    <div class="audios">
      <audio ref={audioDOM} src={srcAudio?.src} onEnded={playNext} />
      {audio.value !== '' &&
        <>
          <h4>
            {srcAudio?.title}
          </h4>
          <div>
            <input type="range" id="duration" name="duration" min="0" value={duration} max={srcAudio?.duration} onChange={handleUserDuration} />
          </div>
          <div>
            <input type="range" id="volume" name="volume" min="0" max="100" />
          </div>
          <Icon path={mdiSkipPrevious} size={1} onClick={playPrevSong} />
          {isPlaying &&
            <Icon path={mdiPause} size={1} onClick={stopMusic} />
          }
          {!isPlaying &&
            <Icon path={mdiPlay} size={1} onClick={resumeMusic} />
          }
          <Icon path={mdiSkipNext} size={1} onClick={playNextSong} />
          <Icon path={mdiPlaylistMusic} size={1} onClick={handleAudio} />
          <Icon path={mdiRepeat} size={1} onClick={handleOnRepeat} />
          <Icon path={mdiShuffleVariant} size={1} onClick={handleRandomize} />
          <Icon path={mdiVolumeHigh} size={1} onClick={volumeUp} />
        </>}
      </div>
    </>
  )
}

export default AudioControls
