import React, { Component } from 'react'
import Navbar from '../../melecules/navbar'
import Search from '../../melecules/search'
import Card from '../../melecules/card';
import Button from '../../atoms/button'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todolist: [
                {
                    title: "hello",
                    content: "ini saya mau apa aja boloeh dah",
                    category: "hiburan",
                },
                {
                    title: "hello",
                    content: "ini saya mau apa aja boloeh dah",
                    category: "hiburan",
                },
                {
                    title: "hello",
                    content: "ini saya mau apa aja boloeh dah",
                    category: "hiburan",
                },
                {
                    title: "hello",
                    content: "ini saya mau apa aja boloeh dah",
                    category: "hiburan",
                },
                {
                    title: "hello",
                    content: "ini saya mau apa aja boloeh dah",
                    category: "hiburan",
                },
                {
                    title: "hello",
                    content: "ini saya mau apa aja boloeh dah",
                    category: "hiburan",
                },
            ]
        }

    }
    handleadd = (data) => {
        window.alert(data)
    }
    render() {
        return (
            <div>
                <Navbar />
                <Search />
                <Button title="ADD" onClick={(e) => this.handleadd(e)} />
                <div className="container">
                    <div className="row">
                        {this.state.todolist.map(item =>
                            <Card title={item.title} category={item.category} content={item.content} />
                        )}
                    </div>
                </div>

            </div>
        )
    }
}
export default Home;