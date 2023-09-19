import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        {
          id: 1,
          name: "John",
          mathMarks: 78,
          physicsMarks: 85,
          chemistryMarks: 92
        },
        {
          id: 2,
          name: "Emily",
          mathMarks: 88,
          physicsMarks: 90,
          chemistryMarks: 87
        },
        {
          id: 3,
          name: "Michael",
          mathMarks: 92,
          physicsMarks: 78,
          chemistryMarks: 95
        },
        {
          id: 4,
          name: "Sarah",
          mathMarks: 75,
          physicsMarks: 82,
          chemistryMarks: 89
        },
        {
          id: 5,
          name: "Daniel",
          mathMarks: 82,
          physicsMarks: 87,
          chemistryMarks: 83
        },
        {
          id: 6,
          name: "Olivia",
          mathMarks: 90,
          physicsMarks: 92,
          chemistryMarks: 88
        },
        {
          id: 7,
          name: "Matthew",
          mathMarks: 87,
          physicsMarks: 75,
          chemistryMarks: 91
        },
        {
          id: 8,
          name: "Sophia",
          mathMarks: 79,
          physicsMarks: 85,
          chemistryMarks: 84
        },
        {
          id: 9,
          name: "Liam",
          mathMarks: 95,
          physicsMarks: 89,
          chemistryMarks: 93
        },
        {
          id: 10,
          name: "Ava",
          mathMarks: 83,
          physicsMarks: 91,
          chemistryMarks: 86
        }
      ];
      
      
    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey="physicsMarks" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;