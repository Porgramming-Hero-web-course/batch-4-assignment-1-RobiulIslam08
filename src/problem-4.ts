// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type RectangleArea = {
	shape: 'rectangle';
	width:number
	height:number;
}

type CircleArea = {
	shape:'circle';
	radius:number
}

type Area = RectangleArea | CircleArea 

const calculateShapeArea = (obj:Area):number => {
	if(obj.shape == 'rectangle'){
		return obj.width * obj.height
	}
	if(obj.shape == 'circle'){
		return Math.PI * obj.radius ** 2
	}
}
const rectangleArea = calculateShapeArea({
	shape: "rectangle",
	width: 4,
	height: 6,
  });
console.log(rectangleArea)

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 })
console.log(circleArea)