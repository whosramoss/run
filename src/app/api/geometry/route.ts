import { geometryListSchema } from "@schemas/GeometrySchema";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const parsedData = geometryListSchema.safeParse(data);

    if (!parsedData.success) {
      console.error("[Validation Error]", parsedData.error.issues);
      return NextResponse.json(
        { message: "Invalid data format" },
        { status: 400 },
      );
    }

    return NextResponse.json(parsedData, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "failed to load data from route GET" },
      { status: 500 },
    );
  }
}

const data = [
  { id: 0, image: '/images/geometry/box.png', title: 'BoxGeometry', description: "A class for generating rectangular cuboid geometries.", route: '/geometry/box', link: 'https://threejs.org/docs/#api/en/geometries/BoxGeometry' },
  { id: 1, image: '/images/geometry/sphere.png', title: 'SphereGeometry', description: 'A class for generating sphere geometries.', route: '/geometry/sphere', link: 'https://threejs.org/docs/#api/en/geometries/SphereGeometry' },
  { id: 2, image: '/images/geometry/cone.png', title: 'ConeGeometry', description: 'A class for generating cone geometries.', route: '/geometry/cone', link: 'https://threejs.org/docs/#api/en/geometries/ConeGeometry' },
  { id: 3, image: '/images/geometry/cylinder.png', title: 'CylinderGeometry', description: 'A class for generating cylinder geometries.', route: '/geometry/cylinder', link: 'https://threejs.org/docs/#api/en/geometries/CylinderGeometry' },
  { id: 4, image: '/images/geometry/ring.png', title: 'RingGeometry', description: 'A class for generating a two-dimensional ring geometry.', route: '/geometry/ring', link: 'https://threejs.org/docs/#api/en/geometries/RingGeometry' },
  { id: 5, image: '/images/geometry/icosahedron.png', title: 'IcosahedronGeometry', description: 'A class for generating an icosahedron geometry.', route: '/geometry/icosahedron', link: 'https://threejs.org/docs/#api/en/geometries/IcosahedronGeometry' },
  { id: 6, image: '/images/geometry/dodecahedron.png', title: 'DodecahedronGeometry', description: 'A class for generating a dodecahedron geometries.', route: '/geometry/dodecahedron', link: 'https://threejs.org/docs/#api/en/geometries/DodecahedronGeometry' },
  { id: 7, image: '/images/geometry/torus.png', title: 'TorusGeometry', description: 'A class for generating torus geometries.', route: '/geometry/torus', link: 'https://threejs.org/docs/#api/en/geometries/TorusGeometry' },
  { id: 8, image: '/images/geometry/torusKnot.png', title: 'TorusKnotGeometry', description: 'A class for generating torus knot geometries', route: '/geometry/torusKnot', link: 'https://threejs.org/docs/#api/en/geometries/TorusKnotGeometry' },
]
