const countdown = document.getElementById('countdown')
const answer = document.getElementById('answer')

// Set Launch Date (ms)
const launchDate = new Date(Date.UTC(2024, 3, 20, 17, 0, 0)).getTime()

const update = () => {
    // Get todays date and time (ms)
    const now = new Date().getTime()

    // Distance from now to the launch date
    const distance = launchDate - now

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Display result
    countdown.innerHTML = `${days} Days ${hours} Hours ${mins} Minutes ${seconds} Seconds`

    // If launch date passed
    if (distance < 0) {
        // Style and output text
        countdown.style.color = '#17B847'
        countdown.innerHTML = 'Started!'
        answer.innerHTML = 'Yes'
        return true
    } else {
        answer.innerHTML = 'No'
        return false
    }
}

update()

// Update every second
const interval = setInterval(() => {
    update = update()
    if (update) {
        clearInterval(interval)
    }
}, 1000)
