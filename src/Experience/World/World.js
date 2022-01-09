import * as THREE from 'three'
import Experience from "../Experience"
import Environment from './Environment'
import { Box } from './Meshes'

class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.box = new Box(1, 4, 1)
        this.box.instance.material.color.setHex(Math.random() * 0xffffff)

        this.box2 = new Box(1, 4, 1)

        this.resources.on('ready', () => {
            this.environment = new Environment()
        })



    }

    update() {
        this.box.instance.rotation.x += .001
        this.box.instance.rotation.y += .001
        this.box.instance.rotation.z += .001
        this.box2.instance.rotation.x += -.002
        this.box2.instance.rotation.y += -.002
        this.box2.instance.rotation.z += -.002
    }
}

export default World