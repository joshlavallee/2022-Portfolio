import * as THREE from 'three'
import Experience from "../../Experience"

class Box {
    constructor(length, width, height) {
        this.experience = new Experience();

        this.geometry = new THREE.BoxGeometry(length, width, height)
        this.material = new THREE.MeshStandardMaterial()

        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.Mesh(this.geometry, this.material)
        this.experience.scene.add(this.instance)
    }
}

export default Box