import * as THREE from 'three'
import Experience from "../../Experience"

class Gameboy {
    constructor(source) {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.resource = this.resources.items.gameboyModel

        this.setModel()
    }

    setModel() {
        this.model = this.resource.scene
        this.model.scale.set(2, 2, 2)
        this.model.position.x = 3
        this.model.position.y = 0.5
        this.scene.add(this.model)

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
            }
        })
    }

    update() {
        this.model.rotation.y += 0.001
    }
}

export default Gameboy