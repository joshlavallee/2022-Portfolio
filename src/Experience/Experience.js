import * as THREE from 'three'
import { Resources, Sizes, Time } from './Utils'
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World'

let instance = null


class Experience {
    constructor(canvas) {
        if (instance) {
            return instance
        }

        instance = this
        window.experience = this

        this.canvas = canvas
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        this.sizes.on('resize', () => {
            this.resize()
        })

        this.time.on('tick', () => {
            this.update()
        })
    }

    resize() {
        this.camera.resize()
        this.renderer.resize()
    }

    update() {
        this.camera.update()
        this.renderer.update()
    }
}

export default Experience