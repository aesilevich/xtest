

class Button {
    constructor(id) {
        var element = document.getElementById(id)
        element.widget = this
        element.onclick = function() {
            this.widget.executeOnClick()
        }
    }

    setOnClick(body) {
        this.#onClick_ = body
    }

    executeOnClick() {
        if (this.#onClick_) {
            this.#onClick_()
        }
    }

    #onClick_
}


class Text {
    constructor(id) {
        this.#element_ = document.getElementById(id)
    }

    text() {
        return this.#element_.innerText
    }

    setText(txt) {
        this.#element_.innerText = txt
    }

    #element_
}


class CounterWidget {
    constructor(counterId, buttonId) {
        this.#counterText_ = new Text(counterId)

        var button = new Button(buttonId)
        button.setOnClick(function() {
            var x = parseInt(this.#counterText_.text())
            this.#counterText_.setText((x + 1).toString())
        }.bind(this))
    }

    #counterText_
}


new CounterWidget("my_counter", "my_button")
