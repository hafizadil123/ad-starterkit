const cliProgress = require('cli-progress');
const _colors = require('ansi-colors');
const Logger = require('log-cli')

const logger = new Logger();

const progressBar = (projectName) => {
    console.log('');
    // create new progress bar
    const b1 = new cliProgress.Bar({
        format: 'Please wait... |' + _colors.cyan('{bar}') + '| {percentage}%',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
    });

    // initialize the bar -  defining payload token "speed" with the default value "N/A"
    b1.start(200, 0, {
        speed: "N/A"
    });

    // the bar value - will be linear incremented
    let value = 0;

    const speedData = [];

    // 20ms update rate
    const timer = setInterval(function(){
        // increment value
        value++;

        // example speed data
        speedData.push(Math.random()*2+5);
        const currentSpeedData = speedData.splice(-10);

        // update the bar value
        b1.update(value, {
            speed: (currentSpeedData.reduce(function(a, b) { return a + b; }, 0) / currentSpeedData.length).toFixed(2) + "Mb/s"
        });

        // set limit
        if (value >= b1.getTotal()){
            // stop timer
            clearInterval(timer);
          
            b1.stop();
            logger.success(` Your project - ${ _colors.red.bold.underline(`${projectName}`)} - has been created! ✅`);
        }
    }, 20);
    }

module.exports ={
    progressBar
}