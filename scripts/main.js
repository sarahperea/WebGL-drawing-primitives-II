    function main(){
      var canvas = document.getElementById("c");

      if(!canvas) {
        console.log("Canvas element with id specified non-existent");
      }
      
      //Get the rendering context (WebGL)
      var gl = initializeWebGL(canvas,true);

      //initialize shader programs
      var vertexShader = initializeShader(gl, "shader-vs");
      var fragmentShader = initializeShader(gl, "shader-fs");
      var program = initializeProgram(gl, vertexShader, fragmentShader);
      gl.useProgram(program);

      //clear canvas
      gl.clearColor(0.99, 0.99, 0.7, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      //get storage location of shader variables
      var uColor = gl.getUniformLocation(program, "uColor");
      var aPosition = gl.getAttribLocation(program,"aPosition"); 
      var aPointSize = gl.getAttribLocation(program, "aPointSize");
      gl.vertexAttrib1f(aPointSize, 15);

      var shapes = [
      	// forehead center upper
      	{
      		vertices: [
	      		0.0, 0.517, 0.0,
	       		0.04, 0.107, 0.0,
	       		-0.04, 0.107, 0.0,
      		],
      		mode: gl.TRIANGLES,	count: 3,
      		r: 0.35, g: 0.35, b: 0.35
      	},
      	// forehead left upper 1
      	{
			vertices: [
	      		-0.193, 0.467, 0.0,
	       		-0.033, 0.167, 0.0,
	       		0.0, 0.517, 0.0,
      		],
			mode: gl.TRIANGLES,	count: 3,
			r: 0.14, g: 0.14, b: 0.14
      	},
      	// forehead right upper 1
      	{
      		vertices: [
	      		0.193, 0.467, 0.0,
	       		0.033, 0.167, 0.0,
	       		0.0, 0.517, 0.0,
      		],
      		mode: gl.TRIANGLES,	count: 3,
      		r: 0.14, g: 0.14, b: 0.14
      	},
      	// forehead left upper 2
      	{
			vertices: [
	      		-0.35, 0.407, 0.0,
	       		-0.193, 0.467, 0.0,
	       		-0.033, 0.167, 0.0,
				-0.035, 0.130, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.1, g: 0.1, b: 0.1
      	},
		//forehead right upper 2
		{
			vertices: [
	      		0.35, 0.407, 0.0,
	       		0.193, 0.467, 0.0,
	       		0.033, 0.167, 0.0,
				0.035, 0.130, 0.0,
	      	],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.1, g: 0.1, b: 0.1

		},
		//forehead blue 1
		{
      		vertices: [
      			-0.04, 0.107, 0.0,
				-0.323, 0.123, 0.0,
       			-0.197, 0.273, 0.0,
				-0.035, 0.130, 0.0,
       		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.08, g: 0.08, b: 0.17
		},
		//forehead blue 2
		{
			vertices: [
      			0.04, 0.107, 0.0,
				0.035, 0.130, 0.0,
       			0.197, 0.273, 0.0,
				0.323, 0.123, 0.0,
       		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.08, g: 0.08, b: 0.17
		},
		//forehead gray
		{
			vertices: [
	      		-0.45, 0.357, 0.0,
	       		-0.35, 0.407, 0.0,
	       		-0.197, 0.273, 0.0,
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.3, g: 0.3, b: 0.3
		},
		//forehead gray 2
		{
			vertices: [
	      		0.45, 0.357, 0.0,  //vertex 1
	       		0.35, 0.407, 0.0,  //vertex 2
	       		0.197, 0.273, 0.0,     //vertex 3
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.3, g: 0.3, b: 0.3
		},
		//forehead gray 3
		{
			vertices: [
	      		-0.45, 0.357, 0.0,  //vertex 1
	       		-0.197, 0.273, 0.0,  //vertex 2
	       		-0.323, 0.123, 0.0,     //vertex 3
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.2, g: 0.2, b: 0.2
		},
		//forehead gray 3
		{
			vertices: [
	      		0.45, 0.357, 0.0,  //vertex 1
	       		0.197, 0.273, 0.0,  //vertex 2
	       		0.323, 0.123, 0.0,     //vertex 3
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.2, g: 0.2, b: 0.2
		},
		//forehead gray 4
		{
			vertices: [
	      		-0.45, 0.357, 0.0,  //vertex 1
	       		-0.323, 0.123, 0.0,     //vertex 3
				-0.493, 0.03, 0.0,
 				-0.67, 0.167, 0.0,
 	     	],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.2, g: 0.2, b: 0.2
		},
		//forehead gray 4
		{
			vertices: [
	      		0.45, 0.357, 0.0,  //vertex 1
	       		0.323, 0.123, 0.0,     //vertex 3
				0.493, 0.03, 0.0,
 				0.67, 0.167, 0.0,
	      	],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.2, g: 0.2, b: 0.2
		},
		//forehead gray 5
		{
			vertices: [
				-0.493, 0.03, 0.0,
 				-0.67, 0.167, 0.0,
				-0.477, 0.22, 0.0,
	      	],
			mode: gl.TRIANGLES, count: 3,
			r: 0.3, g: 0.3, b: 0.3
		},
		//forehead gray 5
		{
			vertices: [
				0.493, 0.03, 0.0,
 				0.67, 0.167, 0.0,
				0.477, 0.22, 0.0,
	      	],
			mode: gl.TRIANGLES, count: 3,
			r: 0.3, g: 0.3, b: 0.3
		},
		//forehead line
		{
			vertices: [
	      		-0.45, 0.357, 0.0,  //vertex 1
	       		-0.323, 0.123, 0.0,     //vertex 3
	      	],
			mode: gl.LINES, count: 2,
			r: 0.3, g: 0.3, b: 0.3
		},
		//forehead line
		{
			vertices: [
	      		0.45, 0.357, 0.0,  //vertex 1
	       		0.323, 0.123, 0.0,     //vertex 3
      		],
			mode: gl.LINES, count: 2,
			r: 0.3, g: 0.3, b: 0.3
		},
		{
			vertices: [
	      		-0.35, 0.407, 0.0,  //vertex 1
	       		-0.193, 0.467, 0.0, //vertex 2
				-0.413, 0.47, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.14, g: 0.14, b: 0.14
		},
		{
			vertices: [
	      		0.35, 0.407, 0.0,  //vertex 1
	       		0.193, 0.467, 0.0, //vertex 2
				0.413, 0.47, 0.0
	      	],
			mode: gl.TRIANGLES, count: 3,
			r: 0.14, g: 0.14, b: 0.14
		},
		{
			vertices: [
				-0.413, 0.47, 0.0,
	      		-0.35, 0.407, 0.0,  //vertex 1
				-0.45, 0.357, 0.0,
				-0.617, 0.5, 0.0,
    	  	],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.4, g: 0.4, b:0.4
		},
		{
			vertices: [
				0.413, 0.47, 0.0,
	      		0.35, 0.407, 0.0,  //vertex 1
				0.45, 0.357, 0.0,
				0.617, 0.5, 0.0,
	      	],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.4, g: 0.4, b: 0.4
		},
		{
			vertices: [
				-0.45, 0.357, 0.0,
				-0.723, 0.417, 0.0,
				-0.737, 0.603, 0.0
	      	],
			mode: gl.TRIANGLES, count: 3,
			r: 0.5, g: 0.5, b: 0.5
		},
		{
			vertices: [
				0.45, 0.357, 0.0,
				0.723, 0.417, 0.0,
				0.737, 0.603, 0.0
    	  	],
			mode: gl.TRIANGLES, count: 3,
			r: 0.5, g: 0.5, b: 0.5
		},
		{
			vertices: [
				-0.723, 0.417, 0.0,
				-0.737, 0.603, 0.0,
				-0.95, 0.683, 0.0
	      	],
			mode: gl.TRIANGLES, count: 3,
			r: 0.3, g: 0.3, b: 0.3
		},
		{
			vertices: [
				0.723, 0.417, 0.0,
				0.737, 0.603, 0.0,
				0.95, 0.683, 0.0
	      	],
			mode: gl.TRIANGLES, count: 3,
			r: 0.3, g: 0.3, b: 0.3
		},
		{
			vertices: [
				-0.413, 0.47, 0.0,
				-0.617, 0.5, 0.0,
				-0.737, 0.603, 0.0,
				-0.563, 0.6, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				0.413, 0.47, 0.0,
				0.617, 0.5, 0.0,
				0.737, 0.603, 0.0,
				0.563, 0.6, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				-0.737, 0.603, 0.0,
				-0.563, 0.6, 0.0,
				-0.95, 0.683, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				0.737, 0.603, 0.0,
				0.563, 0.6, 0.0,
				0.95, 0.683, 0.0
	      	],
			mode: gl.TRIANGLES, count: 3,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				-0.95, 0.683, 0.0,
				-0.723, 0.417, 0.0,
				-0.99, 0.633, 0.0,
				-0.99, 0.683, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.45, g: 0.45, b: 0.45
		},
		{
			vertices: [
				0.95, 0.683, 0.0,
				0.723, 0.417, 0.0,
				0.99, 0.633, 0.0,
				0.99, 0.683, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.45, g: 0.45, b: 0.45
		},
		{
			vertices: [
				-0.723, 0.417, 0.0,
				-0.99, 0.633, 0.0,
				-0.99, 0.61, 0.0,
				-0.77, 0.317, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.08, g: 0.08, b: 0.17
		},
		{
			vertices: [
				0.723, 0.417, 0.0,
				0.99, 0.633, 0.0,
				0.99, 0.61, 0.0,
				0.77, 0.317, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.08, g: 0.08, b: 0.17
		},
		{
			vertices: [
				-0.723, 0.417, 0.0,
				-0.77, 0.317, 0.0,
				-0.741, 0.213, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.08, g: 0.08, b: 0.17
		},
		{
			vertices: [
				0.723, 0.417, 0.0,
				0.77, 0.317, 0.0,
				0.741, 0.213, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.08, g: 0.08, b: 0.17
		},
		{
			vertices: [
				-0.723, 0.417, 0.0,
				-0.741, 0.213, 0.0,
				-0.673, 0.163, 0.0,
				-0.45, 0.357, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.08, g: 0.08, b: 0.17
		},
		{
			vertices: [
				0.723, 0.417, 0.0,
				0.741, 0.213, 0.0,
				0.673, 0.163, 0.0,
				0.45, 0.357, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.08, g: 0.08, b: 0.17
		},
		{
			vertices: [
				-0.037, 0.113, 0.0,
				-0.067, -0.14, 0.0,
				-0.253, -0.0267, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.14, g: 0.14, b: 0.14
		},
		{
			vertices: [
				0.037, 0.113, 0.0,
				0.067, -0.14, 0.0,
				0.253, -0.0267, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.14, g: 0.14, b: 0.14
		},
		{
			vertices: [
				-0.037, 0.113, 0.0,
				-0.33, 0.127, 0.0,
				-0.253, -0.0267, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.2, g: 0.2, b: 0.2
		},
		{
			vertices: [
				0.037, 0.113, 0.0,
				0.33, 0.127, 0.0,
				0.253, -0.0267, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.2, g: 0.2, b: 0.2
		},
		{
			vertices: [
				-0.33, 0.127, 0.0,
				-0.253, -0.0267, 0.0,
				-0.5, 0.03, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				0.33, 0.127, 0.0,
				0.253, -0.0267, 0.0,
				0.5, 0.03, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.1, g: 0.1, b: 0.1
		},
		//brown cheeks
		{
			vertices: [
				-0.48, 0.03, 0.0,
				-0.727, -0.147, 0.0,
				-0.739, 0.219, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.2, g: 0.12, b: 0.12
		},
		{
			vertices: [
				0.48, 0.03, 0.0,
				0.727, -0.147, 0.0,
				0.739, 0.219, 0.0
      	    ],
			mode: gl.TRIANGLES, count: 3,
			r: 0.2, g: 0.12, b: 0.12
		},
		{
			vertices: [
				-0.71, -0.227, 0.0,
				-0.48, 0.03, 0.0,
				-0.727, -0.147, 0.0,
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				0.71, -0.227, 0.0,
				0.48, 0.03, 0.0,
				0.727, -0.147, 0.0,
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				-0.567, -0.553, 0.0,
				-0.609, -0.11, 0.0,
				-0.71, -0.227, 0.0,
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				0.567, -0.553, 0.0,
				0.609, -0.11, 0.0,
				0.71, -0.227, 0.0,
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				-0.069, -0.137, 0.0,
				-0.193, -0.357, 0.0,
				-0.25, -0.023, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.2, g: 0.2, b: 0.2
		},
		{
			vertices: [
				0.069, -0.137, 0.0,
				0.193, -0.357, 0.0,
				0.25, -0.023, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.2, g: 0.2, b: 0.2
		},
		{
			vertices: [
				-0.193, -0.357, 0.0,
				-0.3, -0.457, 0.0,
				-0.39, -0.37, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				0.193, -0.357, 0.0,
				0.3, -0.457, 0.0,
				0.39, -0.37, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				-0.193, -0.357, 0.0,
				-0.197, -0.310, 0.0,
				-0.26, -0.37, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				0.193, -0.357, 0.0,
				0.197, -0.310, 0.0,
				0.26, -0.37, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.1, g: 0.1, b: 0.1
		},
		{
			vertices: [
				-0.3, -0.457, 0.0,
				-0.456, -0.647, 0.0,
				-0.569, -0.55, 0.0,
				-0.579, -0.427, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.14, g: 0.14, b: 0.14
		},
		{
			vertices: [
				0.3, -0.457, 0.0,
				0.456, -0.647, 0.0,
				0.569, -0.55, 0.0,
				0.579, -0.427, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.14, g: 0.14, b: 0.14
		},
		//light brown
		{
			vertices: [
				-0.3, -0.457, 0.0,
				-0.579, -0.427, 0.0,
				-0.559, -0.273, 0.0,
				-0.383, -0.367, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.3, g: 0.22, b: 0.22
		},
		{
			vertices: [
				0.3, -0.457, 0.0,
				0.579, -0.427, 0.0,
				0.559, -0.273, 0.0,
				0.383, -0.367, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.3, g: 0.22, b: 0.22
		},
		{
			vertices: [
				-0.3, -0.457, 0.0,
				-0.457, -0.643, 0.0,
				-0.32, -0.623, 0.0,
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.4, g: 0.4, b: 0.4
		},
		{
			vertices: [
				0.3, -0.457, 0.0,
				0.457, -0.643, 0.0,
				0.32, -0.623, 0.0,
      	 	],
			mode: gl.TRIANGLES, count: 3,
			r: 0.4, g: 0.4, b: 0.4
		},
		{
			vertices: [
				-0.457, -0.643, 0.0,
				-0.32, -0.623, 0.0,
				-0.233, -0.723, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.25, g: 0.25, b: 0.25
		},
		{
			vertices: [
				0.457, -0.643, 0.0,
				0.32, -0.623, 0.0,
				0.233, -0.723, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.25, g: 0.25, b: 0.25
		},
		{
			vertices: [
				0.193, -0.36, 0.0,
				0.303, -0.47, 0.0,
				0.32, -0.617, 0.0,
				0.217, -0.763, 0.0,
				0.0, -0.853, 0.0,
				-0.217, -0.763, 0.0,
				-0.32, -0.617, 0.0,
				-0.303, -0.47, 0.0,
				-0.193, -0.36, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 9,
			r: 1.0, g: 1.0, b: 1.0
		},
		{
			vertices: [
			   	0.07, -0.14, 0.0,
				0.193, -0.36, 0.0,
				-0.193, -0.36, 0.0,
			   	-0.07, -0.14, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 1.0, g: 1.0, b: 1.0
		},
		{
			vertices: [
			  	 0.07, -0.14, 0.0,
				0.033, 0.106, 0.0,
				-0.033, 0.106, 0.0,
			   	-0.07, -0.14, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 1.0, g: 1.0, b: 1.0
		},
		{
			vertices: [
				-0.069, -0.137, 0.0,
				-0.193, -0.357, 0.0,
				-0.137, -0.367, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.7, g: 0.7, b: 0.7
		},
		{
			vertices: [
				0.069, -0.137, 0.0,
				0.193, -0.357, 0.0,
				0.137, -0.367, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.7, g: 0.7, b: 0.7
		},	
		//forehead center down
		{
			vertices:[
	      		0.0, -0.303, 0.0,  //vertex 1
	       		0.04, 0.107, 0.0,  //vertex 2
	       		-0.04, 0.107, 0.0,  //vertex 3
	      	],
			mode: gl.TRIANGLES, count: 3,
			r: 0.9, g: 0.9, b: 0.9
		},
		{
			vertices: [
				-0.62, -0.12, 0.0,
				-0.49, 0.03, 0.0,
				-0.249, -0.025, 0.0,
				-0.224, -0.167, 0.0 
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.15, g: 0.15, b: 0.15
		},
		{
			vertices: [
				0.62, -0.12, 0.0,
				0.49, 0.03, 0.0,
				0.249, -0.025, 0.0,
				0.224, -0.167, 0.0 
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.15, g: 0.15, b: 0.15
		},
		{
			vertices: [
				-0.16, -0.26, 0.0,
				-0.207, -0.313, 0.0,
				-0.307, -0.323, 0.0,
				-0.38, -0.297, 0.0,
				-0.423, -0.21, 0.0,
				-0.343, -0.083, 0.0,
				-0.207, -0.14, 0.0  
      		],
			mode: gl.TRIANGLE_FAN, count: 7,
			r: 0.5, g: 0.5, b: 0.5
		},
		{
			vertices: [
				0.16, -0.26, 0.0,
				0.207, -0.313, 0.0,
				0.307, -0.323, 0.0,
				0.38, -0.297, 0.0,
				0.423, -0.21, 0.0,
				0.343, -0.083, 0.0,
				0.207, -0.14, 0.0  
      		],
			mode: gl.TRIANGLE_FAN, count: 7,
			r: 0.5, g: 0.5, b: 0.5
		},
		{
			vertices: [
				-0.423, -0.21, 0.0,
				-0.38, -0.297, 0.0,
				-0.38, -0.37, 0.0,
				-0.56, -0.274, 0.0,
				-0.553, -0.187, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 5,
			r: 0.2, g: 0.12, b: 0.12
		},
		{
			vertices: [
				0.423, -0.21, 0.0,
				0.38, -0.297, 0.0,
				0.38, -0.37, 0.0,
				0.56, -0.274, 0.0,
				0.553, -0.187, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 5,
			r: 0.2, g: 0.12, b: 0.12
		},
		{
			vertices: [
				-0.38, -0.297, 0.0,
				-0.38, -0.37, 0.0,
				-0.25, -0.365, 0.0,
				-0.307, -0.323, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.2, g: 0.12, b: 0.12
		},
		{
			vertices: [
				0.38, -0.297, 0.0,
				0.38, -0.37, 0.0,
				0.25, -0.365, 0.0,
				0.307, -0.323, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.2, g: 0.12, b: 0.12
		},
		{
			vertices: [
				-0.195, -0.31, 0.0,
				-0.307, -0.323, 0.0,
				-0.25, -0.365, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 3,
			r: 0.2, g: 0.12, b: 0.12
		},
		{
			vertices: [
				0.195, -0.31, 0.0,
				0.307, -0.323, 0.0,
				0.25, -0.365, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 3,
			r: 0.2, g: 0.12, b: 0.12
		},
		{
			vertices: [
				-0.423, -0.21, 0.0,
				-0.343, -0.083, 0.0,
				-0.497, -0.127, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.35, g: 0.35, b: 0.35
		},
		{
			vertices: [
				0.423, -0.21, 0.0,
				0.343, -0.083, 0.0,
				0.497, -0.127, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.35, g: 0.35, b: 0.35
		},
		{
			vertices: [
				-0.423, -0.21, 0.0,
				-0.55, -0.187, 0.0,
				-0.497, -0.127, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.5, g: 0.5, b: 0.5
		},
		{
			vertices: [
				0.423, -0.21, 0.0,
				0.55, -0.187, 0.0,
				0.497, -0.127, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.5, g: 0.5, b: 0.5
		},
		{
			vertices: [
				-0.61, -0.12, 0.0,
				-0.55, -0.187, 0.0,
				-0.497, -0.127, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.4, g: 0.4, b: 0.4
		},
		{
			vertices: [
				-0.61, -0.12, 0.0,
				-0.55, -0.187, 0.0,
				-0.576, -0.45, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.4, g: 0.4, b: 0.4
		},
		{
			vertices: [				
				0.61, -0.12, 0.0,
				0.55, -0.187, 0.0,
				0.497, -0.127, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.4, g: 0.4, b: 0.4
		},
		{
			vertices: [
				0.61, -0.12, 0.0,
				0.55, -0.187, 0.0,
				0.576, -0.45, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.4, g: 0.4, b: 0.4
		},
		/* EYES LEFT */
		{
			vertices: [
				-0.16, -0.26, 0.0,
				-0.223, -0.303, 0.0,
				-0.385, -0.299, 0.0,
				-0.427, -0.213, 0.0,
				-0.34, -0.17, 0.0,
				-0.253, -0.17, 0.0,
				-0.207, -0.207, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 7,
			r: 0.1, g: 0.1, b: 0.1
		},
		//eyes blue outer
		{
			vertices: [
				-0.34, -0.17, 0.0,
				-0.253, -0.17, 0.0,
				-0.217, -0.227, 0.0,
				-0.24, -0.303, 0.0,
				-0.303, -0.323, 0.0,
				-0.37, -0.303, 0.0,
				-0.39, -0.247, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 7,
			r: 0.2, g: 0.52, b: 0.9
		},
		//eyes blue inner
		{
			vertices: [
				-0.32, -0.2, 0.0,
				-0.267, -0.2, 0.0,
				-0.242, -0.237, 0.0,
				-0.267, -0.29, 0.0,
				-0.339, -0.29, 0.0,
				-0.36, -0.240, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 6,
			r: 0.2, g: 0.6, b: 0.9
		},
		//eyes little black
		{
			vertices: [
				-0.317, -0.207, 0.0,
				-0.29 , -0.207, 0.0,
				-0.28, -0.237, 0.0,
				-0.29 , -0.275, 0.0,
				-0.317, -0.275, 0.0,
				-0.327, -0.237, 0.0
	      	],
			mode: gl.TRIANGLE_FAN, count: 6,
			r: 0.1, g: 0.1, b: 0.1
		},
		//eyes little white
		{
			vertices: [
				-0.33, -0.207, 0.0,
				-0.317, -0.207, 0.0,
				-0.307, -0.222, 0.0,
				-0.317, -0.237, 0.0,
				-0.33, -0.237, 0.0,
				-0.34, -0.222, 0.0,
	      	],
			mode: gl.TRIANGLE_FAN, count: 6,
			r: 1.0, g: 1.0, b: 1.0
		},
		/* EYES RIGHT */
		//black eyes
		{
			vertices: [
				0.16, -0.26, 0.0,
				0.223, -0.303, 0.0,
				0.385, -0.299, 0.0,
				0.427, -0.213, 0.0,
				0.34, -0.17, 0.0,
				0.253, -0.17, 0.0,
				0.207, -0.207, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 7,
			r: 0.1, g: 0.1, b: 0.1
		},
		//eyes blue outer
		{
			vertices: [
				0.34, -0.17, 0.0,
				0.253, -0.17, 0.0,
				0.217, -0.227, 0.0,
				0.24, -0.303, 0.0,
				0.303, -0.323, 0.0,
				0.37, -0.303, 0.0,
				0.39, -0.247, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 7,
			r: 0.2, g: 0.52, b: 0.9
		},
		//eyes blue inner
		{
			vertices: [
				0.32, -0.2, 0.0,
				0.267, -0.2, 0.0,
				0.242, -0.237, 0.0,
				0.267, -0.29, 0.0,
				0.339, -0.29, 0.0,
				0.36, -0.240, 0.0,
	      	],
			mode: gl.TRIANGLE_FAN, count: 6,
			r: 0.2, g: 0.6, b: 0.9
		},
		//eyes little black
		{
			vertices: [
				0.317, -0.207, 0.0,
				0.29 , -0.207, 0.0,
				0.28, -0.237, 0.0,
				0.29 , -0.275, 0.0,
				0.317, -0.275, 0.0,
				0.327, -0.237, 0.0
				
	      	],
			mode: gl.TRIANGLE_FAN, count: 6,
			r: 0.1, g: 0.1, b: 0.1
		},
		//eyes little white
		{
			vertices: [
				0.33, -0.207, 0.0,
				0.317, -0.207, 0.0,
				0.307, -0.222, 0.0,
				0.317, -0.237, 0.0,
				0.33, -0.237, 0.0,
				0.34, -0.222, 0.0,
      		],
			mode: gl.TRIANGLE_FAN, count: 6,
			r: 1.0, g: 1.0, b: 1.0
		},
		{
			vertices: [
				-0.138, -0.37, 0.0,
				-0.069, -0.13, 0.0,
				-0.063, -0.483, 0.0,
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.94, g: 0.94, b: 0.94
		},
		{
			vertices: [
				-0.138, -0.36, 0.0,
				-0.12, -0.46, 0.0,
				-0.193, -0.353, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.94, g: 0.94, b: 0.94
		},
		{
			vertices: [
				-0.3, -0.46, 0.0,
				-0.12, -0.46, 0.0,
				-0.317, -0.623,0.0,				
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.94, g: 0.94, b: 0.94
		},
		{
			vertices: [
				-0.12, -0.46, 0.0,
				-0.12, -0.537, 0.0,
				-0.233, -0.73, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.94, g: 0.94, b: 0.94
		},
		{
			vertices: [
				0.138, -0.37, 0.0,
				0.069, -0.13, 0.0,
				0.063, -0.483, 0.0,
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.94, g: 0.94, b: 0.94
		},
		{
			vertices: [
				0.138, -0.36, 0.0,
				0.12, -0.46, 0.0,
				0.193, -0.353, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.94, g: 0.94, b: 0.94
		},
		{
			vertices: [
				0.3, -0.46, 0.0,
				0.12, -0.46, 0.0,
				0.317, -0.623,0.0,				
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.94, g: 0.94, b: 0.94
		},
		{
			vertices: [
				0.12, -0.46, 0.0,
				0.12, -0.537, 0.0,
				0.233, -0.73, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.94, g: 0.94, b: 0.94
		},
		//shadow near nose
		{
			vertices: [
				-0.313, -0.623, 0.0,
				-0.057, -0.63, 0.0,
				-0.17, -0.68, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.9, g: 0.9, b: 0.9
		},
		{
			vertices: [
				-0.057, -0.63, 0.0,
				-0.17, -0.68, 0.0,
				-0.17, -0.74, 0.0,
				-0.077, -0.677, 0.0				
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.92, g: 0.92, b: 0.92
		},
		//shadow near nose
		{
			vertices: [
				0.313, -0.623, 0.0,
				0.057, -0.63, 0.0,
				0.17, -0.68, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 0.9, g: 0.9, b: 0.9
		},
		{
			vertices: [
				0.057, -0.63, 0.0,
				0.17, -0.68, 0.0,
				0.17, -0.74, 0.0,
				0.077, -0.677, 0.0				
      		],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.92, g: 0.92, b: 0.92
		},
		/* NOSE */
		{
			vertices: [
				-0.113, -0.54, 0.0,
				-0.113, -0.503, 0.0,
				-0.06, -0.48, 0.0,
				0.0, -0.51, 0.0,
				0.0, -0.607, 0.0
	      	],
			mode: gl.TRIANGLE_FAN, count: 5,
			r: 1.0, g: 0.75, b: 0.75
		},
		{
			vertices: [
				-0.113, -0.54, 0.0,
				-0.017, -0.597, 0.0,
				-0.08, -0.54, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 1.0, g: 0.4, b: 0.4
		},
		{
			vertices: [
				0.113, -0.54, 0.0,
				0.113, -0.503, 0.0,
				0.06, -0.48, 0.0,
				0.0, -0.51, 0.0,
				0.0, -0.607, 0.0
      		],
			mode: gl.TRIANGLE_FAN, count: 5,
			r: 1.0, g: 0.75, b: 0.75
		},
		{
			vertices: [
				0.113, -0.54, 0.0,
				0.017, -0.597, 0.0,
				0.08, -0.54, 0.0
      		],
			mode: gl.TRIANGLES, count: 3,
			r: 1.0, g: 0.4, b: 0.4
		},
		//center long nose
		{
			vertices: [
				-0.01, -0.507, 0.0,
				0.01, -0.507, 0.0,
				0.023, -0.557, 0.0,
				0.01, -0.629, 0.0,
				-0.01, -0.629, 0.0,
				-0.023, -0.557, 0.0,
			],
			mode: gl.TRIANGLE_FAN, count: 6,
			r: 1.0, g: 0.66, b: 0.66
		},
		{
			vertices: [
				0.0, -0.62, 0.0,
				-0.067, -0.67, 0.0,
				-0.05, -0.687, 0.0,
				0.0, -0.653, 0.0,
			],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 1.0, g: 0.66, b: 0.66
		},
		{
			vertices: [
				-0.067, -0.67, 0.0,
				-0.05, -0.687, 0.0,
				-0.123, -0.68, 0.0
			],
			mode: gl.TRIANGLES, count: 3,
			r: 1.0, g: 0.66, b: 0.66
		},
		{
			vertices: [
				0.0, -0.62, 0.0,
				0.067, -0.67, 0.0,
				0.05, -0.687, 0.0,
				0.0, -0.653, 0.0,
			],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 1.0, g: 0.66, b: 0.66
		},
		{
			vertices: [
				0.067, -0.67, 0.0,
				0.05, -0.687, 0.0,
				0.123, -0.68, 0.0
			],
			mode: gl.TRIANGLES, count: 3,
			r: 1.0, g: 0.66, b: 0.66
		},
		{
			vertices: [
				-0.035, -0.68, 0.0,
				0.035, -0.68, 0.0,
				0.0, -0.65, 0.0
			],
			mode: gl.TRIANGLES, count: 3,
			r: 1.0, g: 0.75, b: 0.75
		},
		//chin shadow
		{
			vertices: [
				-0.1367, -0.723, 0.0,
				0.0, -0.69, 0.0,
				0.1367, -0.723, 0.0,
				0.0, -0.853, 0.0
			],
			mode: gl.TRIANGLE_FAN, count: 4,
			r: 0.9,g: 0.9, b: 0.9
		}
      ];

	    shapes.map(v => {
	      	drawShape(v.vertices, v.mode, v.count, v.r, v.g, v.b)
	    })

		function drawShape(vertices, mode, count, r, g, b){
		   //passing multiple data values to a vertex shader*/
		   var vertexBuffer = gl.createBuffer();
		   gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);
		   gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(vertices),gl.STATIC_DRAW);
		   gl.vertexAttribPointer(aPosition,3,gl.FLOAT,false,0,0);
		   gl.enableVertexAttribArray(aPosition);

		   //Set values of uColor variable in WebGL Program
		   gl.uniform4f(uColor,r,g,b,1.0);
		   //Execute a vertex shader to draw shapes (mode,first,count)
		   gl.drawArrays(mode, 0, count);
		}
    }