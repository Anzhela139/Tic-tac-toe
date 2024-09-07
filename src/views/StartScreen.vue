import { get, set } from '../utils'
import { mdiImageOutline } from '@mdi/js';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiWindowClose } from '@mdi/js';

import { useDispatch } from 'react-redux'
import { changeMenu } from '../store/menuSlice'
import { mdiWeatherNight } from '@mdi/js';

function StartScreen(props) {
    const dispatch = useDispatch()
    const isCurrentlyPlaying = useSelector(state => state.isCurrentlyPlaying)
    const isSavedGame = useSelector(state => state.isSavedGame)
    const [showStartScreen, setStartScreen] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showRules, setShowRules] = useState(false)
    const [showKeys, setShowKeys] = useState(false)

    const handleRules = (event) => {
        event.preventDefault()
        setShowRules(!showRules)
    }

    const handleKeys = (event) => {
        event.preventDefault()
        setShowKeys(!showKeys)
    }

    const handleSave = () => {
        const { font, size, username1, username2 } = props
        let moves = []
        let allTiles = document.querySelectorAll('.tile')
        for (let i = 0; i < allTiles.length; i++) {
            moves.push(allTiles[i].innerHTML)
        }
        let game = [font, size, username1, username2, moves]
        set('game_230455', game)
    }

    const handleResume = () => {
        const { handleToggle, handleSize, handleName } = props
        let game = get('game_230455')
        console.log(game[4][0][0])
        handleToggle(game[0])
        handleSize(game[1])
        handleName(game[2])
        handleName(game[3])
        let allTiles = document.querySelectorAll('.tile')
        for (let i = 0; i < allTiles.length; i++) {
            allTiles[i].innerHTML = game[4][0][i]
            if (allTiles[i].innerHTML === '') allTiles[i].classList.add('not-played')
        }
    }

    const handleLogin = (event) => {
        event.preventDefault()
        setShowLogin(!showLogin)
    }

    const handleClose = (menuScreen) => {
        // event.preventDefault()
        console.log(menuScreen)
        dispatch(changeMenu(menuScreen));
    }

    return (
        <div class="wrapper start-screen">
            <button class="btn btn-secondary" type='button' onClick={() => handleClose('Gameplay')}>
                Gameplay
            </button>
            <button class="btn btn-secondary" type='button' onClick={() => handleClose('Settings')}>
                Settings
            </button>
            {
                isCurrentlyPlaying.value &&
                <button class="btn btn-secondary" type='button' onClick={handleSave}>
                    Save current game
                </button>
            }

            <button class="btn btn-primary" type='button' onClick={props.handleNewGame}>
                Start new game
            </button>
            {
                isSavedGame.value &&
                <button class="btn btn-secondary" type='button' onClick={handleResume}>
                    Resume saved game
                </button>
            }
        </div>
    )
}

export default StartScreen