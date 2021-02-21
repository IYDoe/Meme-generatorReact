import React from 'react'
import MemeGenerator from './MemeGenerator'

class MemeGeneratorContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.generate = this.generate.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    generate(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImage: randMemeImg })
    }


    render() {
        return (
            <div>
                <MemeGenerator handleChange={this.handleChange} generate={this.generate} state={this.state} />
            </div>
        )
    }

}

export default MemeGeneratorContainer