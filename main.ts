namespace SpriteKind {
    export const chestpees = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.chestpees, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (jj) {
            jj = false
            controller.moveSprite(otherSprite, 50, 50)
        }
    } else {
        jj = true
        controller.moveSprite(otherSprite, 0, 0)
    }
})
let jj = false
tiles.setTilemap(tiles.createTilemap(
            hex`1000100003030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030201020102010201030303030303030301020102010201020303030303030303020102010201020103030303030303030102010201020102030303030303030302010201020102010303030303030303010201020102010203030303030303030201020102010201030303030303030301020102010201020303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.castle.tileGrass1],
            TileScale.Sixteen
        ))
scene.centerCameraAt(0, 0)
let mySprite2 = sprites.create(img`
. . . . . . b b b b b . . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . b b b b b b b b b b b . . 
. . . b b b b b b b b b b b . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(11, 10))
mySprite2 = sprites.create(img`
. . . . . . b b b b b . . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . b b b b b b b b b b b . . 
. . . b b b b b b b b b b b . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(10, 10))
mySprite2 = sprites.create(img`
. . . . . . b b b b b . . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . b b b b b b b b b b b . . 
. . . b b b b b b b b b b b . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 10))
mySprite2 = sprites.create(img`
. . . . . . b b b b b . . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . b b b b b b b b b b b . . 
. . . b b b b b b b b b b b . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 10))
mySprite2 = sprites.create(img`
. . . . . . b b b b b . . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . b b b b b b b b b b b . . 
. . . b b b b b b b b b b b . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(7, 10))
mySprite2 = sprites.create(img`
. . . . . . b b b b b . . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . b b b b b b b b b b b . . 
. . . b b b b b b b b b b b . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(6, 10))
mySprite2 = sprites.create(img`
. . . . . . b b b b b . . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . b b b b b b b b b b b . . 
. . . b b b b b b b b b b b . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(5, 10))
mySprite2 = sprites.create(img`
. . . . . . b b b b b . . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . b b b b b b b . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . . b b b b b . . . . . 
. . . b b b b b b b b b b b . . 
. . . b b b b b b b b b b b . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 10))
let mySprite = sprites.create(img`
2 2 2 2 2 2 2 2 
2 . . . . . . 2 
2 . . . . . . 2 
2 . . . . . . 2 
2 . . . . . . 2 
2 . . . . . . 2 
2 . . . . . . 2 
2 2 2 2 2 2 2 2 
`, SpriteKind.Player)
mySprite2 = sprites.create(img`
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 5))
mySprite2 = sprites.create(img`
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(5, 5))
mySprite2 = sprites.create(img`
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(6, 5))
mySprite2 = sprites.create(img`
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 5))
mySprite2 = sprites.create(img`
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(7, 5))
mySprite2 = sprites.create(img`
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 5))
mySprite2 = sprites.create(img`
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(10, 5))
mySprite2 = sprites.create(img`
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(11, 5))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f . . 
. . . . . . . . . . . . . b b b 
. . . . . . . . . . . . . 1 f b 
. . f b b b b b b b b b b 1 f b 
. . f b b b b b b b b b b b b b 
. . f b b b b b b b b b b . . . 
. . f b . . . . . . . . b . . . 
. . . b . . . . . . . . b . . . 
. . . b . . . . . . . . b . . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(5, 11))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f . . 
. . . . . . . . . . . . . b b b 
. . . . . . . . . . . . . 1 f b 
. . f b b b b b b b b b b 1 f b 
. . f b b b b b b b b b b b b b 
. . f b b b b b b b b b b . . . 
. . f b . . . . . . . . b . . . 
. . . b . . . . . . . . b . . . 
. . . b . . . . . . . . b . . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(10, 11))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . b . . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . b b b b b b b . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . b b b b b b b . . . . 
. . . . b b b b b b b b b b . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(6, 11))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . b . . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . b b b b b b b . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . b b b b b . . . . . 
. . . . . b b b b b b b . . . . 
. . . . b b b b b b b b b b . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 11))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . b . b . b . b . b . . . 
. . . . b . b . b . b . b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 11))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . b . b . b . b . b . . . 
. . . . b . b . b . b . b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(11, 11))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 . 5 . 5 . . . . . 
. . . . . . 5 5 5 5 5 . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . b b b b b b b b . . . . 
. . . b b b b b b b b b b . . . 
. . b b b b b b b b b b b b . . 
. . b b b b b b b b b b b b . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(7, 11))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 4 . . . . . . . 
. . . . . . 4 4 4 4 4 . . . . . 
. . . . . . 4 4 4 4 4 . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . . b b b . . . . . . 
. . . b b b b b b b b b b b . . 
. . . b b b b b b b b b b b . . 
. . . b b b b b b b b b b b . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 11))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f . . 
. . . . . . . . . . . . . 8 8 8 
. . . . . . . . . . . . . 1 f 8 
. . f 8 8 8 8 8 8 8 8 8 8 1 f 8 
. . f 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . f 8 8 8 8 8 8 8 8 8 8 . . . 
. . f 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(10, 4))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 8 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(6, 4))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 8 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 4))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 4 . . . . . . . 
. . . . . . 4 4 4 4 4 . . . . . 
. . . . . . 4 4 4 4 4 . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(7, 4))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 . 5 . 5 . . . . . 
. . . . . . 5 5 5 5 5 . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . 8 8 8 8 8 8 8 8 . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(8, 4))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 8 . 8 . 8 . 8 . 8 . . . 
. . . . 8 . 8 . 8 . 8 . 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 4))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 8 . 8 . 8 . 8 . 8 . . . 
. . . . 8 . 8 . 8 . 8 . 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(11, 4))
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f . . 
. . . . . . . . . . . . . 8 8 8 
. . . . . . . . . . . . . 1 f 8 
. . f 8 8 8 8 8 8 8 8 8 8 1 f 8 
. . f 8 8 8 8 8 8 8 8 8 8 8 8 8 
. . f 8 8 8 8 8 8 8 8 8 8 . . . 
. . f 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
`, SpriteKind.chestpees)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(5, 4))
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 50, 50)
