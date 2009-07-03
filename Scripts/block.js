var scale = 1.0;

private var cubeVertices = [
	Vector3(0, 0, 0),
	Vector3(10, 0, 0),
	Vector3(0, 10, 0),
	Vector3(10, 10, 0),
	Vector3(0, 0, 10),
	Vector3(10, 0, 10),
	Vector3(0, 10, 10),
	Vector3(10, 10, 10)
];

private var cubeTriangles = [
	0, 1, 2,
	1, 2, 3,
	1, 0, 4,
	1, 5, 4,
	1, 5, 3,
	7, 5, 3,
	7, 2, 3,
	7, 6, 2,
	4, 6, 2,
	4, 0, 2,
	4, 5, 7,
	4, 6, 7
];

function Start () {
	var mesh = new Mesh ();
	GetComponent (MeshFilter).mesh = mesh;
	mesh.vertices = cubeVertices;
	mesh.triangles = cubeTriangles;
	//	mesh.uv = cubeUV;
	mesh.RecalculateNormals();
}