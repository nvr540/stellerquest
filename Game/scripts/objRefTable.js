const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Tilemap,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.destroy,
		C3.Behaviors.Bullet,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Behaviors.Tween,
		C3.Plugins.Arr,
		C3.Plugins.Text,
		C3.Plugins.Browser,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.TiledBg.Acts.SetY,
		C3.Plugins.TiledBg.Exps.Y,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.TiledBg.Cnds.CompareY,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.Arr.Acts.SetSize,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Arr.Exps.Width,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.Arr.Exps.AsJSON,
		C3.Plugins.Arr.Acts.SetXY,
		C3.Plugins.TiledBg.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Tilemap: 0},
	{BG: 0},
	{"8Direction": 0},
	{Rocket: 0},
	{DestroyOutsideLayout: 0},
	{Bullet: 0},
	{Laser: 0},
	{Keyboard: 0},
	{enemyspawn: 0},
	{enemyspawn2: 0},
	{enemyspawn3: 0},
	{Solid: 0},
	{wall: 0},
	{wall2: 0},
	{wall3: 0},
	{met: 0},
	{met2: 0},
	{met3: 0},
	{Sprite: 0},
	{Audio: 0},
	{start: 0},
	{Mouse: 0},
	{restart: 0},
	{TiledBackground2: 0},
	{Tween: 0},
	{astronaut: 0},
	{TiledBackground3: 0},
	{astro: 0},
	{TiledBackground4: 0},
	{NPC: 0},
	{Sprite2: 0},
	{cloud: 0},
	{InstructionArray: 0},
	{NPCDialogueText: 0},
	{Browser: 0},
	{Text: 0},
	{QuestionsArray: 0},
	{TrueButton: 0},
	{FalseButton: 0},
	{QuestionText: 0},
	{ScoreText: 0},
	{retry: 0},
	{falsi: 0},
	{TiledBackground5: 0},
	{btn1: 0},
	{TiledBackground6: 0},
	{TiledBackground7: 0},
	{TiledBackground8: 0},
	{Text3: 0},
	{instruct: 0},
	{GameEnds: 0},
	{AddWater: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{bg_speed: 0},
	{randomX: 0},
	{randomX2: 0},
	{InstructionIndex: 0},
	{InstructionIndex2: 0},
	{CurrentQuestionIndex: 0},
	{Score: 0},
	{CorrectAnswer: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Tilemap: class extends self.ITilemapInstance {},
	BG: class extends self.ITiledBackgroundInstance {},
	Rocket: class extends self.ISpriteInstance {},
	Laser: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	enemyspawn: class extends self.ISpriteInstance {},
	enemyspawn2: class extends self.ISpriteInstance {},
	enemyspawn3: class extends self.ISpriteInstance {},
	wall: class extends self.ISpriteInstance {},
	wall2: class extends self.ISpriteInstance {},
	wall3: class extends self.ISpriteInstance {},
	met: class extends self.ISpriteInstance {},
	met2: class extends self.ISpriteInstance {},
	met3: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	start: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	restart: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	astronaut: class extends self.ISpriteInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	astro: class extends self.ISpriteInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	NPC: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	cloud: class extends self.ISpriteInstance {},
	InstructionArray: class extends self.IArrayInstance {},
	NPCDialogueText: class extends self.ITextInstance {},
	Browser: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	QuestionsArray: class extends self.IArrayInstance {},
	TrueButton: class extends self.ISpriteInstance {},
	FalseButton: class extends self.ISpriteInstance {},
	QuestionText: class extends self.ITextInstance {},
	ScoreText: class extends self.ITextInstance {},
	retry: class extends self.ISpriteInstance {},
	falsi: class extends self.ISpriteInstance {},
	TiledBackground5: class extends self.ITiledBackgroundInstance {},
	btn1: class extends self.ITextInstance {},
	TiledBackground6: class extends self.ITiledBackgroundInstance {},
	TiledBackground7: class extends self.ITiledBackgroundInstance {},
	TiledBackground8: class extends self.ITiledBackgroundInstance {},
	Text3: class extends self.ITextInstance {},
	instruct: class extends self.ITextInstance {},
	GameEnds: class extends self.ITextInstance {},
	AddWater: class extends self.ITextInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {}
}