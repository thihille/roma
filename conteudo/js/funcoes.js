var verificar_conclusao_cnd;
//Foi necessário criar uma váriavel para contar os erros em cada estágio porque as funções de init e out das fases interfere na contagem de uma única contagem



var respostas_erradas_stage_1;
var respostas_erradas_stage_2;
var respostas_erradas_stage_3;
var respostas_erradas_stage_4;
//
respostas_erradas_stage_1=0;
respostas_erradas_stage_2=0;
respostas_erradas_stage_3=0;
respostas_erradas_stage_4=0;
//
var status_visitas=["n","n","n","n"];
var voltar_inst_intro;
voltar_inst_intro="sim";
var estagio_atual;
estagio_atual="0";
var tempo = {
	balao1: 18000,
	balaoAcerto:6500,
	balaoErro:6500,
	balaoGameOver:6500
}
var startGame = {
	alternativas: 0,
	steps:0,
	selectStage: {
		init: function(){
			//respostas_erradas=0;
			if(estagio_atual=="0"){
				$(".areaClick1, .areaClick2, .areaClick3, .areaClick4").show().addClass("animated flash");
				//setTimeout(function(){ $(".areaClick1, .areaClick2, .areaClick3, .areaClick4").show().addClass("animated flash"); }, 9000);
			}else{
								
			}
			

			
			$(".areaClick1").one("click",function(){
				$(this).remove();
				startGame.fase1.in();
				//startGame.steps++
				$(".areaClick1, .areaClick2, .areaClick3, .areaClick4").hide().removeClass("animated flash");
				textos2.stop().play("loading");
			});
			$(".areaClick2").one("click",function(){
				$(this).remove();
				startGame.fase2.in();
				//startGame.steps++
				$(".areaClick1, .areaClick2, .areaClick3, .areaClick4").hide().removeClass("animated flash");
				textos2.stop().play("loading");
			});
			$(".areaClick3").one("click",function(){
				$(this).remove();
				startGame.fase3.in();
				//startGame.steps++
				$(".areaClick1, .areaClick2, .areaClick3, .areaClick4").hide().removeClass("animated flash");
				textos2.stop().play("loading");
			});
			$(".areaClick4").one("click",function(){
			setTimeout(function(){
				document.querySelector(".falaMuseu").style.display="inherit"; document.querySelector(".falaMuseu").style.zIndex="600"; document.querySelector(".falaMuseu").style.opacity="1";
			},3000);
				$(this).remove();
				startGame.fase4.in();
				//startGame.steps++
				$(".areaClick1, .areaClick2, .areaClick3, .areaClick4").hide().removeClass("animated flash");
				textos2.stop().play("loading");
			});
			$("#stage1 ul.menu li.certo").on("click",function(){
				//respostas_erradas=0;
				estagio_atual="1";
				status_visitas[0]="p";
				console.log(estagio_atual);
				audio_parte1_2.volume(0);
				$(this).css({"border-color":"#090","color":"#090"});
				setTimeout(function(){ 
					document.querySelector(".falaBasilicaSaoPedro").style.display="none"; document.querySelector(".falaBasilicaSaoPedro").style.zIndex="1"; document.querySelector(".falaBasilicaSaoPedro").style.opacity="0";	
					startGame.selectStage.init();					
				}, 1000);
				/*if(status_visitas=="p,p,p,p" && estagio_atual=="1"){
							setTimeout(function(){ console.log("Verificando conclusão"); console.log("Encerramento!"); parar_todos_audios(); audio_parte1_6.play(); $("#stage2").addClass("animated slideOutRight"); $(".balaoAcertoFinal").fadeOut(500,function(){	textos.stop().play("text6");$(".balao6").fadeIn(500); $(".instrutor").show().removeClass("anInstrutorInRight").removeClass("anInstrutorOutRight").removeClass("anInstrutorInLeft").removeClass("anInstrutorOutLeft").addClass("anInstrutorInLeft"); document.querySelector("#instrutor_conclusao").style.display="inherit"; $(".map").removeClass("stage2-play").addClass("stage2-out");	$(".ovFeed").fadeOut(500); }); setTimeout(function(){location.href = "index.html"},14000); }, 7500);				
							}*/					
				if(startGame.steps == 99){
					$(".falaBasilicaSaoPedro").fadeOut(500,function(){
						$(".balaoAcertoFinal").fadeIn(500);
						parar_todos_audios();
						//textos.stop();
						//textos2.stop();
						//textos2.stop().play("acertofinal");
						audio_parte1_6.play();
						$(".instrutor").show().removeClass("anInstInLeft").addClass("anInstOutLeft");
						console.log("audio_parte1_6.play();")
					});
					setTimeout(function(){
						/*$("#stage1").addClass("animated slideOutRight");
						$(".balaoAcertoFinal").fadeOut(500,function(){
							textos.stop().play("text6");
							$(".balao6").fadeIn(500);
							$(".map").removeClass("stage3-play").addClass("stage3-out");
							$(".ovFeed").fadeOut(500);
						});*/
						setTimeout(function(){
							//location.href = "index.html"
						},14000);
					},4000);
				}else{
					startGame.alternativas = 0;
					startGame.fase1.out();
					$(".balaoErro").fadeOut(200);
					$("#stage1 ul.menu li").off("click");
					parar_todos_audios();
					//textos.stop();
					//textos2.stop();
					$(".ovFeedMenu").show();
				}
			}); 
			
			$("#stage1 ul.menu li.errado").on("click",function(){
				startGame.alternativas++;
				//respostas_erradas_stage_1++;
				$(".ovFeedMenu").show();
				$(this).css("opacity",.2).off("click");
				if(startGame.alternativas != 2){
					$(".balao2").fadeOut(200);
					$(".balaoErro").fadeIn(200);
					parar_todos_audios();
					//textos.stop();
					//textos2.stop();
					//textos2.stop().play("erro");
					audio_feedback_1.play();
					console.log("audio_feedback_1.play();")
					setTimeout(function(){
						$(".balao2").fadeIn(200);
						$(".balaoErro").fadeOut(200);
						$(".ovFeedMenu").hide();
					},tempo.balaoErro);
				}else{/*
					$("#stage1 ul.menu li").off("click");
					$(".balaoErro").fadeOut(200);
					$(".balao2").fadeOut(200);
					$(".balaoGameOver").fadeIn(200);
					parar_todos_audios();
					audio_feedback_2.play();
					console.log("audio_feedback_2.play();")
					//textos2.stop().play("gameover");
					setTimeout(function(){
						location.href = "index.html"
					},tempo.balaoGameOver);
				*/}
			});
			$("#stage2 ul.menu li.certo").on("click",function(){
				//respostas_erradas=0;
				estagio_atual="2";
				status_visitas[1]="p";
				console.log(estagio_atual);
				audio_parte1_5.volume(0);

				$(this).css({"border-color":"#090","color":"#090"});
				setTimeout(function(){ 
					document.querySelector(".falaColiseu").style.display="none"; document.querySelector(".falaColiseu").style.zIndex="1"; document.querySelector(".falaColiseu").style.opacity="0";	
					startGame.selectStage.init();					
				}, 1000);
				/*if(status_visitas=="p,p,p,p" && estagio_atual=="2"){
							setTimeout(function(){ console.log("Verificando conclusão"); console.log("Encerramento!"); parar_todos_audios(); audio_parte1_6.play(); $("#stage2").addClass("animated slideOutRight"); $(".balaoAcertoFinal").fadeOut(500,function(){	textos.stop().play("text6");$(".balao6").fadeIn(500); $(".instrutor").show().removeClass("anInstrutorInRight").removeClass("anInstrutorOutRight").removeClass("anInstrutorInLeft").removeClass("anInstrutorOutLeft").addClass("anInstrutorInLeft"); document.querySelector("#instrutor_conclusao").style.display="inherit"; $(".map").removeClass("stage2-play").addClass("stage2-out");	$(".ovFeed").fadeOut(500); }); setTimeout(function(){location.href = "index.html"},14000); }, 7500);				
							}*/
					if(startGame.steps == 99){
					$(".falaColiseu").fadeOut(500,function(){
						$(".balaoAcertoFinal").fadeIn(500);
						parar_todos_audios();
						//textos.stop();
						//textos2.stop();
						$(".instrutor").show().removeClass("anInstInLeft").addClass("anInstOutLeft");
						audio_feedback_4.play();
						console.log("audio_feedback_4.play();")						
						//textos2.stop().play("acertofinal");
					});
					setTimeout(function(){
						/*$("#stage2").addClass("animated slideOutRight");
						$(".balaoAcertoFinal").fadeOut(500,function(){
							textos.stop().play("text6");
							$(".balao6").fadeIn(500);
							$(".map").removeClass("stage2-play").addClass("stage2-out");
							$(".ovFeed").fadeOut(500);
						});*/
						setTimeout(function(){
							//location.href = "index.html"
						},14000);
					},4000);
				}else{
					startGame.alternativas = 0;
					startGame.fase2.out();
					$(".balaoErro").fadeOut(200);
					$("#stage2 ul.menu li").off("click");
					parar_todos_audios();
					//textos.stop();
					//textos2.stop();
					$(".ovFeedMenu").show();
				}
				
			});
			$("#stage2 ul.menu li.errado").on("click",function(){
				startGame.alternativas++;
				//respostas_erradas_stage_2++;
				$(".ovFeedMenu").show();
				$(this).css("opacity",.2).off("click");
				if(startGame.alternativas != 2){
					$(".balao3").fadeOut(200);
					$(".balaoErro").fadeIn(200);
					parar_todos_audios();
					//textos.stop();
					//textos2.stop();
					//textos2.stop().play("erro");
					audio_feedback_1.play();
					console.log("audio_feedback_1.play();");
					setTimeout(function(){
						$(".balao3").fadeIn(200);
						$(".balaoErro").fadeOut(200);
						$(".ovFeedMenu").hide();
					},tempo.balaoErro);
				}else{/*
					$("#stage2 ul.menu li").off("click");
					$(".balaoErro").fadeOut(200);
					$(".balao3").fadeOut(200);
					$(".balaoGameOver").fadeIn(200);
					parar_todos_audios();
					//textos.stop();
					//textos2.stop();
					audio_feedback_2.play();
					console.log("audio_feedback_2.play();");					
					//textos2.stop().play("gameover");
					setTimeout(function(){
						location.href = "index.html"
					},tempo.balaoGameOver);
				*/}
			});
			$("#stage3 ul.menu li.certo").on("click",function(){
				//respostas_erradas=0;
				estagio_atual="3";
				status_visitas[2]="p";
				console.log(estagio_atual);
				audio_parte1_3.volume(0);
				$(this).css({"border-color":"#090","color":"#090"});
				setTimeout(function(){ 
					document.querySelector(".falaMuseu").style.display="none"; document.querySelector(".falaMuseu").style.zIndex="1"; document.querySelector(".falaMuseu").style.opacity="0";
					document.querySelector(".falaRua").style.display="none"; document.querySelector(".falaRua").style.zIndex="1"; document.querySelector(".falaRua").style.opacity="0";	
					startGame.selectStage.init();
				}, 1000);
				/*if(status_visitas=="p,p,p,p" && estagio_atual=="3"){
							setTimeout(function(){ console.log("Verificando conclusão"); console.log("Encerramento!"); parar_todos_audios(); audio_parte1_6.play(); $("#stage2").addClass("animated slideOutRight"); $(".balaoAcertoFinal").fadeOut(500,function(){	textos.stop().play("text6");$(".balao6").fadeIn(500); $(".instrutor").show().removeClass("anInstrutorInRight").removeClass("anInstrutorOutRight").removeClass("anInstrutorInLeft").removeClass("anInstrutorOutLeft").addClass("anInstrutorInLeft"); document.querySelector("#instrutor_conclusao").style.display="inherit"; $(".map").removeClass("stage2-play").addClass("stage2-out");	$(".ovFeed").fadeOut(500); }); setTimeout(function(){location.href = "index.html"},14000); }, 7500);				
							}*/
					if(startGame.steps == 99){
					$(".falaRua").fadeOut(500,function(){
						$(".balaoAcertoFinal").fadeIn(500);
						parar_todos_audios();
						//textos.stop();
						//textos2.stop();
						$(".instrutor").show().removeClass("anInstInLeft").addClass("anInstOutLeft");
						audio_feedback_4.play();
						console.log("audio_feedback_4.play();");							
						//textos2.stop().play("acertofinal");
					});
					
					setTimeout(function(){
						/*$("#stage3").addClass("animated slideOutRight");
						$(".balaoAcertoFinal").fadeOut(500,function(){
							textos.stop().play("text6");
							$(".balao6").fadeIn(500);
							$(".map").removeClass("stage1-play").addClass("stage1-out");
							$(".ovFeed").fadeOut(500);
						});*/
						setTimeout(function(){
							//location.href = "index.html"
						},14000);
					},4000);
				}else{
					startGame.alternativas = 0;
					startGame.fase3.out();
					$(".balaoErro").fadeOut(200);
					$("#stage3 ul.menu li").off("click");
					parar_todos_audios();
					//textos.stop();
					//textos2.stop();
					$(".ovFeedMenu").show();
				}
			});
			$("#stage3 ul.menu li.errado").on("click",function(){
				startGame.alternativas++;
				//respostas_erradas_stage_3++;
				$(this).css("opacity",.2).off("click");
				$(".ovFeedMenu").show();
				if(startGame.alternativas != 2){
					$(".balao5").fadeOut(200);
					$(".balaoErro").fadeIn(200);
					parar_todos_audios();
					//textos.stop();
					//textos2.stop();
					audio_feedback_1.play();
					console.log("audio_feedback_1.play();");					
					//textos2.stop().play("erro");
					setTimeout(function(){
						$(".balao5").fadeIn(200);
						$(".balaoErro").fadeOut(200);
						$(".ovFeedMenu").hide();
					},tempo.balaoErro);
				}else{/*
					$("#stage3 ul.menu li").off("click");
					$(".balaoErro").fadeOut(200);
					$(".balao5").fadeOut(200);
					$(".balaoGameOver").fadeIn(200);
					parar_todos_audios();
					//textos.stop();
					//textos2.stop();
					audio_feedback_2.play();
					console.log("audio_feedback_2.play();");					
					//textos2.stop().play("gameover");
					setTimeout(function(){
						location.href = "index.html"
					},tempo.balaoGameOver);
				*/}
			});
			$("#stage4 ul.menu li.certo").on("click",function(){
				/*estagio_atual="4";
				status_visitas[3]="p";
				console.log(estagio_atual);
				parar_todos_audios();
				//audio_feedback_3.play();
				audio_feedback_3_acerto.play();
				audio_parte1_4.volume(0);

				setTimeout(function(){ 
				document.querySelector(".falaMuseu").style.display="none"; document.querySelector(".falaMuseu").style.zIndex="1"; document.querySelector(".falaMuseu").style.opacity="0";
					//startGame.selectStage.init();
					estagio_atual="4";					
				}, 1000);
				$(this).css({"border-color":"#090","color":"#090"});
				if(status_visitas=="p,p,p,p" && estagio_atual=="4"){
							setTimeout(function(){ console.log("Verificando conclusão"); console.log("Encerramento!"); parar_todos_audios(); audio_parte1_6.play(); $("#stage2").addClass("animated slideOutRight"); $(".balaoAcertoFinal").fadeOut(500,function(){	textos.stop().play("text6");$(".balao6").fadeIn(500); $(".instrutor").show().removeClass("anInstrutorInRight").removeClass("anInstrutorOutRight").removeClass("anInstrutorInLeft").removeClass("anInstrutorOutLeft").addClass("anInstrutorInLeft"); document.querySelector("#instrutor_conclusao").style.display="inherit"; $(".map").removeClass("stage2-play").addClass("stage2-out");	$(".ovFeed").fadeOut(500); }); setTimeout(function(){location.href = "index.html"},14000); }, 7500);
							}
					if(startGame.steps == 99){
					$(".falaMuseu").fadeOut(500,function(){
						$(".balaoAcertoFinal").fadeIn(500);
						parar_todos_audios();
						//textos.stop();
						//textos2.stop();
						$(".instrutor").show().removeClass("anInstInLeft").addClass("anInstOutLeft");
						console.log("audio_feedback_4.play();");							
						//textos2.stop().play("acertofinal");
					});
					
					setTimeout(function(){
						/*$("#stage4").addClass("animated slideOutRight");
						$(".balaoAcertoFinal").fadeOut(500,function(){
							textos.stop().play("text6");
							$(".balao6").fadeIn(500);
							$(".map").removeClass("stage4-play").addClass("stage4-out");
							$(".ovFeed").fadeOut(500);
						});
						setTimeout(function(){
							//location.href = "index.html"
						},14000);
					},4000);
				}else{
					startGame.alternativas = 0;
					startGame.fase4.out();
					$(".balaoErro").fadeOut(200);
					$("#stage4 ul.menu li").off("click");
					parar_todos_audios();
					//textos.stop();
					//textos2.stop();
					$(".ovFeedMenu").show();
				}
			*/});
			$("#stage4 ul.menu li.errado").on("click",function(){
				startGame.alternativas++;
				//respostas_erradas_stage_4++;
				$(this).css("opacity",.2).off("click");
				$(".ovFeedMenu").show();
				if(startGame.alternativas != 2){
					$(".balao4").fadeOut(200);
					$(".balaoErro").fadeIn(200);
					parar_todos_audios();
					//textos.stop();
					//textos2.stop();
					audio_feedback_1.play();
					console.log("audio_feedback_1.play();");						
					//textos2.stop().play("erro");
					setTimeout(function(){
						$(".balao4").fadeIn(200);
						$(".balaoErro").fadeOut(200);
						$(".ovFeedMenu").hide();
					},tempo.balaoErro);
				}else{/*
					$("#stage4 ul.menu li").off("click");
					$(".balaoErro").fadeOut(200);
					$(".balao4").fadeOut(200);
					$(".balaoGameOver").fadeIn(200);
					parar_todos_audios();
					//textos.stop();
					//textos2.stop();
					audio_feedback_2.play();
					console.log("audio_feedback_2.play();");
					//textos2.stop().play("gameover");
					setTimeout(function(){
						location.href = "index.html"
					},tempo.balaoGameOver);
				*/}
			});
		}
	},
	finaliza:function(){
	},
	fase1: {
		in: function(){
			$(".map").removeClass(" stage1-out stage2-out stage3-out stage4-out").addClass("stage3-play");
			$(".instrutor").show().removeClass("anInstOut anInstOutLeft").addClass("anInstInLeft");
			console.log("!");
			$(".anInstInLeft").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
				$(".falaBasilicaSaoPedro").fadeIn(200);
				//textos.stop().play("text2");
				parar_todos_audios();
				audio_parte1_2.play();
				//sessionStorage.setItem('local_visitado', 'basilica');
				console.log("audio_parte1_2.play();");				
			});
			setTimeout(function(){
				$(".ovFeed").fadeIn(500);
				$("#stage1").show().addClass("animated slideInRight");
			},1400);
			setTimeout(function(){
				$("#stage1 .imgStage1 .anima").addClass("anImgStage1");
				$(".anImgStage1").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
					$("#stage1 .imgStage1 .anima").fadeOut(200);
					$("#stage1 .imgStage1 .img1").fadeIn(200);
				});
			},2800);
		},
		out: function(){
			//respostas_erradas=0;
			setTimeout(function(){ $(".areaClick1, .areaClick2, .areaClick3, .areaClick4").show().addClass("animated flash"); }, 10000)
			if(estagio_atual=="1"){
			$(".balao2").fadeOut(200,function(){
				$(".balaoAcerto").fadeIn(200);
				parar_todos_audios();
				audio_feedback_3.play();
				console.log("audio_feedback_3.play();");					
				//textos2.stop().play("acerto");
				setTimeout(function(){
					$(".balaoAcerto").fadeOut(200);
					$(".ovFeedMenu").hide();
					$("#stage1").addClass("animated slideOutRight");
					$(".instrutor").show().removeClass("anInstInLeft").addClass("anInstOutLeft");
					$(".ovFeed").fadeOut(500);
					setTimeout(function(){
						$(".map").removeClass("stage3-play").addClass("stage3-out");
						/*$(".stage3-out").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
							$(".areaClick1, .areaClick2, .areaClick3, .areaClick4").show().addClass("animated flash");
						});*/
					},1000);
				},tempo.balaoAcerto);
			});
			}
		}
	},
	fase2: {
		in: function(){
			$(".map").removeClass(" stage1-out stage2-out stage3-out stage4-out").addClass("stage2-play");
			$(".instrutor").show().removeClass("anInstOut anInstOutLeft").addClass("anInstInLeft");
			console.log("!");
			$(".anInstInLeft").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
				$(".falaColiseu").fadeIn(500);
				parar_todos_audios();
				audio_parte1_5.play();
				//sessionStorage.setItem('local_visitado', 'coliseu');
				console.log("audio_parte1_3.play();");
				//textos.stop().play("text3");
			});
			setTimeout(function(){
				$(".ovFeed").fadeIn(500);
				$("#stage2").show().addClass("animated slideInRight");
			},1400);
		},
		out: function(){
			//respostas_erradas=0;
			setTimeout(function(){ $(".areaClick1, .areaClick2, .areaClick3, .areaClick4").show().addClass("animated flash"); }, 10000)
			if(estagio_atual=="2"){
			$(".balao3").fadeOut(200,function(){
				$(".balaoAcerto").fadeIn(200);
				parar_todos_audios();
				audio_feedback_3.play();
				console.log("audio_feedback_1.play();");				
				//textos2.stop().play("acerto");
				setTimeout(function(){
					$(".balaoAcerto").fadeOut(200);
					$(".ovFeedMenu").hide();
					$("#stage2").addClass("animated slideOutRight");
					$(".instrutor").show().removeClass("anInstInLeft").addClass("anInstOutLeft");
					$(".ovFeed").fadeOut(500);
					setTimeout(function(){
						$(".map").removeClass("stage2-play").addClass("stage2-out");
						/*$(".stage2-out").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
							$(".areaClick1, .areaClick2, .areaClick3, .areaClick4").show().addClass("animated flash");
						});*/
					},1000);
				},tempo.balaoAcerto);
			});
			}
			
		}
	},
	fase3: {
		in: function(){
			$(".map").removeClass(" stage1-out stage2-out stage3-out stage4-out").addClass("stage1-play");
			$(".instrutor").show().removeClass("anInstOut anInstOutLeft").addClass("anInstInLeft");
			console.log("!");
			$(".anInstInLeft").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
				$(".falaRua").fadeIn(500);
				parar_todos_audios();
				audio_parte1_3.play();
				//sessionStorage.setItem('local_visitado', 'praca');
				console.log("audio_parte1_4.play();");					
				//textos.stop().play("text4");
			});
			setTimeout(function(){
				$(".ovFeed").fadeIn(500);
				$("#stage3").show().addClass("animated slideInRight");
			},1400);
		},
		out: function(){
			//respostas_erradas=0;
			setTimeout(function(){ $(".areaClick1, .areaClick2, .areaClick3, .areaClick4").show().addClass("animated flash"); }, 10000)
			if(estagio_atual=="3"){
			$(".balao5").fadeOut(200,function(){
				$(".balaoAcerto").fadeIn(200);
				parar_todos_audios();
				audio_feedback_3.play();
				console.log("audio_feedback_1.play();");
				//textos2.stop().play("acerto");
				setTimeout(function(){
					$(".balaoAcerto").fadeOut(200);
					$(".ovFeedMenu").hide();
					$("#stage3").addClass("animated slideOutRight");
					$(".instrutor").show().removeClass("anInstInLeft").addClass("anInstOutLeft");
					$(".ovFeed").fadeOut(500);
					setTimeout(function(){
						$(".map").removeClass("stage1-play").addClass("stage1-out");
						/*$(".stage1-out").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
							$(".areaClick1, .areaClick2, .areaClick3, .areaClick4").show().addClass("animated flash");
						});*/
					},1000);
				},tempo.balaoAcerto);
			});
			}
		}
	},
	fase4: {
		in: function(){
			$(".map").removeClass(" stage1-out stage2-out stage3-out stage4-out").addClass("stage4-play");
			$(".instrutor").show().removeClass("anInstOut anInstOutLeft").addClass("anInstInLeft");
			console.log("!");
			$(".anInstInLeft").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
				$(".falaMuseu").fadeIn(500);
				parar_todos_audios();
				audio_parte1_4.play();
				//sessionStorage.setItem('local_visitado', 'palacio');
				console.log("audio_parte1_5.play();");
				//textos.stop().play("text5");
			});
			setTimeout(function(){
				//document.querySelector(".falaMuseu").style.display="inherit"; document.querySelector(".falaMuseu").style.zIndex="600"; document.querySelector(".falaMuseu").style.opacity="1";
				$(".ovFeed").fadeIn(500);
				$("#stage4").show().addClass("animated slideInRight");
			},1400);
		},
		out: function(){
			//respostas_erradas=0;
			setTimeout(function(){ $(".areaClick1, .areaClick2, .areaClick3, .areaClick4").show().addClass("animated flash"); },10000)
			//if(estagio_atual=="4"){
			$(".balao4").fadeOut(200,function(){
				$(".balaoAcerto").fadeIn(200);
				parar_todos_audios();
				//audio_feedback_3.stop();
				//audio_feedback_3_acerto.stop();
				//audio_feedback_3_acerto.play();
			/*setTimeout(function(){
				parar_todos_audios();
				audio_feedback_3_acerto.stop();
				audio_feedback_3_acerto.play();
			},100);*/				
				console.log("audio_feedback_2.play();");				
				//textos2.stop().play("acerto");
				setTimeout(function(){
					document.querySelector("#cobertura_mapa").style.display="none";
					document.querySelector("#cobertura_mapa").style.width="0px";
					$(".balaoAcerto").fadeOut(200);
					$(".ovFeedMenu").hide();
					$("#stage4").addClass("animated slideOutRight");
					$(".instrutor").show().removeClass("anInstInLeft").addClass("anInstOutLeft");
					$(".ovFeed").fadeOut(500);
					setTimeout(function(){
						$(".map").removeClass("stage4-play").addClass("stage4-out");
						/*$(".stage4-out").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
							$(".areaClick1, .areaClick2, .areaClick3, .areaClick4").show().addClass("animated flash");
						});*/
					},1000);
				},tempo.balaoAcerto);
			});
		//}
		}
	},
	
	intro: {
		init:function(){
			$(".instrutor").show().addClass("anInst");
			console.log("!");
			$(".anInst").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
				//textos.stop().play("text1");
				parar_todos_audios();
				audio_parte1_1.play();
				console.log("audio_parte1_1.play();");				
				$(".balao1").fadeIn(300);
				$('.balao1').textillate({
					minDisplayTime: 1000,
					initialDelay: 0,
					autoStart: true,
					in: { delayScale: .9,effect: 'bounceIn' }
				});
				setTimeout(function(){
					
					if(voltar_inst_intro=="sim"){
					voltar_inst_intro="nao";
					$(".balao1").fadeOut(300);
					$(".instrutor").removeClass("anInst").addClass("anInstOut");
					console.log("!");
					$(".anInstOut").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
						startGame.selectStage.init();
					});
					}
				},tempo.balao1);
				
			});
			
		}
	},
	
	init: function(){
		startGame.intro.init();
	}


	
}

function abrir_ponto_ativo_museu(){
	document.querySelector("#cobertura_mapa").style.display="inherit";
	//alert("123");
	//respostas_erradas=0;
	estagio_atual="4";
				status_visitas[3]="p";
				console.log(estagio_atual);
				parar_todos_audios();
				//audio_feedback_3.play();
				audio_feedback_3_acerto.play();
				audio_parte1_4.volume(0);
				//
				$("#stage4 ul.menu li.certo").css({"border-color":"#090","color":"#090"});
				startGame.fase4.out();
				setTimeout(function(){ 
				document.querySelector(".falaMuseu").style.display="none"; document.querySelector(".falaMuseu").style.zIndex="1"; document.querySelector(".falaMuseu").style.opacity="0";
					//startGame.selectStage.init();
					estagio_atual="4";					
				}, 1000);
setTimeout(function(){ $(".areaClick1, .areaClick2, .areaClick3, .areaClick4").show().addClass("animated flash"); }, 10000);
				

}



verificar_conclusao();

function verificar_conclusao(){
  verificar_conclusao_cnd = setInterval(function(){
							if(status_visitas=="p,p,p,p"){
							clearInterval(verificar_conclusao_cnd);
							setTimeout(function(){ console.log("Verificando conclusão"); console.log("Encerramento!"); parar_todos_audios(); audio_parte1_6.play(); $("#stage2").addClass("animated slideOutRight"); $(".balaoAcertoFinal").fadeOut(500,function(){	textos.stop().play("text6");$(".balao6").fadeIn(500); $(".instrutor").show().removeClass("anInstrutorInRight").removeClass("anInstrutorOutRight").removeClass("anInstrutorInLeft").removeClass("anInstrutorOutLeft").addClass("anInstrutorInLeft"); document.querySelector("#instrutor_conclusao").style.display="inherit"; $(".map").removeClass("stage2-play").addClass("stage2-out");	$(".ovFeed").fadeOut(500); }); setTimeout(function(){sessionStorage.setItem('reiniciar_oed', 'sim');},14000); }, 7500);				
							}
							//
				if(respostas_erradas_stage_1>=2 || respostas_erradas_stage_2>=2 || respostas_erradas_stage_3>=2 || respostas_erradas_stage_4>=2){
								//alert("Reiniciar!");
								clearInterval(verificar_conclusao_cnd);
								parar_todos_audios();
								audio_feedback_2.play();
				//
				document.querySelector(".falaBasilicaSaoPedro").style.display="none";
				document.querySelector(".falaBasilicaSaoPedro").style.zIndex="1";
				document.querySelector(".falaBasilicaSaoPedro").style.opacity="0";								
				//			
				document.querySelector(".falaColiseu").style.display="none";
				document.querySelector(".falaColiseu").style.zIndex="1";
				document.querySelector(".falaColiseu").style.opacity="0";										
				//				
				document.querySelector(".falaMuseu").style.display="none";
				document.querySelector(".falaMuseu").style.zIndex="1";
				document.querySelector(".falaMuseu").style.opacity="0";										
				//
				document.querySelector(".falaRua").style.display="none";
				document.querySelector(".falaRua").style.zIndex="1";
				document.querySelector(".falaRua").style.opacity="0";										
				//				
				document.querySelector(".balaoErro").style.display="none";
				document.querySelector(".balaoErro").style.zIndex="1";
				document.querySelector(".balaoErro").style.opacity="0";										
				//				
				document.querySelector(".balaoGameOver").style.display="inherit";
				document.querySelector(".balaoGameOver").style.zIndex="600";
				document.querySelector(".balaoGameOver").style.opacity="1";										
								
				setTimeout(function(){sessionStorage.setItem('reiniciar_oed', 'sim');},5000);			
								
				}
	}, 1000);
}
//
function errar_stage_1(){
	respostas_erradas_stage_1++;
}
function errar_stage_2(){
	respostas_erradas_stage_2++;
}
function errar_stage_3(){
	respostas_erradas_stage_3++;
}
function errar_stage_4(){
	respostas_erradas_stage_4++;
}






