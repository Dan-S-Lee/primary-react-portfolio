import './ColoredLine.css'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            opacity: 1,
            margin: 0,

        }}
    />
);

export default ColoredLine;