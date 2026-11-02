// Read source artwork without modifying it. Usage: swift tools/prepare-portfolio.swift SOURCE OUTPUT
import Foundation
import PDFKit
import AppKit
import AVFoundation
let source = URL(fileURLWithPath: CommandLine.arguments[1])
let output = URL(fileURLWithPath: CommandLine.arguments[2])
try FileManager.default.createDirectory(at: output, withIntermediateDirectories: true)
let pages: [(String, Int, String)] = [
    ("1.pdf", 0, "link-cover"), ("1.pdf", 3, "link-world"), ("1.pdf", 4, "link-scenes"),
    ("2.pdf", 0, "dream-cover"), ("2.pdf", 2, "dream-process"),
    ("6.14/Q ROBOT.pdf", 0, "robot-cover"), ("6.14/Q ROBOT.pdf", 16, "robot-prototype"), ("6.14/Q ROBOT.pdf", 18, "robot-interaction"),
    ("Memories in the ashes.pdf", 14, "ashes-cover")
]
for (file,index,name) in pages {
    guard let doc=PDFDocument(url:source.appendingPathComponent(file)),let page=doc.page(at:index) else {fatalError(file)}
    let image=page.thumbnail(of:NSSize(width:1600,height:1100),for:.mediaBox)
    guard let tiff=image.tiffRepresentation,let bitmap=NSBitmapImageRep(data:tiff),let data=bitmap.representation(using:.png,properties:[:]) else {fatalError(name)}
    try data.write(to:output.appendingPathComponent(name+".png"))
    print("Rendered "+name)
}
let asset=AVURLAsset(url:source.appendingPathComponent("video.MOV"))
if let export=AVAssetExportSession(asset:asset,presetName:AVAssetExportPreset960x540) {
    export.shouldOptimizeForNetworkUse=true
    export.fileLengthLimit=9_000_000
    let target=output.appendingPathComponent("ashes-demo.mp4")
    if FileManager.default.fileExists(atPath:target.path){try FileManager.default.removeItem(at:target)}
    try await export.export(to:output.appendingPathComponent("ashes-demo.mp4"),as:.mp4)
    print("Exported installation video")
}

let generator=AVAssetImageGenerator(asset:asset)
generator.appliesPreferredTrackTransform=true
generator.maximumSize=CGSize(width:1400,height:900)
let frame=try await generator.image(at:CMTime(seconds:10,preferredTimescale:600))
let bitmap=NSBitmapImageRep(cgImage:frame.image)
if let png=bitmap.representation(using:.png,properties:[:]) { try png.write(to:output.appendingPathComponent("ashes-poster.png")) }
