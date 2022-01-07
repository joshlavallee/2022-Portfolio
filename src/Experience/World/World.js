import * as THREE from 'three'
import Experience from "../Experience"
import Environment from './Environment'

class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene

        const box = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial()
        )

        this.scene.add(box)

        this.environment = new Environment()
    }
}

export default World