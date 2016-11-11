$(document).ready(function(){

var author = $('.titleBar #pageDescription a.username').text();
var user = $('.accountUsername').text();
var d = new Date();
var heure = d.getHours();
var signature = "";
    if (heure >= 6 && heure < 18) {
        signature = 'Bonne journée,<br><i>' + user + '</i>';
    }
    else if (heure >= 18 && heure < 23) {
        signature = 'Bonne fin de soirée,<br><i>' + user + '</i>';
    }
    else if (heure >= 23 && heure < 6) {
        signature = 'Bonne nuit,<br><i>' + user + '</i>';
    }
  
var emplacement = '<a type="button" class="button primary boutonMessage" title="Emplacement non respecté" data-msg="[SIZE=4][FONT=MyriadPro-Light]Salut [/FONT][B][FONT=MyriadPro-Regular] ' + author + ' [/FONT][/B][FONT=MyriadPro-Light],[/FONT][/SIZE]<br><br>[SIZE=4][FONT=MyriadPro-Light]Je me suis permis de [/FONT][B][COLOR=rgb(0, 128, 255)][FONT=MyriadPro-Regular]déplacer[/FONT][/COLOR][/B][FONT=MyriadPro-Light] ton sujet car il se trouvait dans la [/FONT][FONT=MyriadPro-Regular][B][COLOR=rgb(0, 128, 255)]mauvaise section[/COLOR][/B]. [B][COLOR=rgb(0, 128, 255)][FA]fa-gavel[/FA][/COLOR][/B][/FONT]<br>[COLOR=rgb(255, 77, 77)][FONT=MyriadPro-Light][fa]fa-hand-o-right[/fa][/FONT][/COLOR][FONT=MyriadPro-Light] Si c\'était une [/FONT][B][COLOR=rgb(255, 77, 77)][FONT=MyriadPro-Regular]erreur[/FONT][/COLOR][/B][FONT=MyriadPro-Light] de ma part, contacte moi avec l\'endroit où tu voudrais qu\'il soit ![/FONT][B][FONT=MyriadPro-Light][COLOR=rgb(255, 77, 77)] [fa]fa-warning fa-border[/fa][/COLOR][/FONT][/B][/SIZE][FONT=MyriadPro-Light][SIZE=4]<br><br> ' + signature + '"><i class="fa fa-arrows-h" aria-hidden="true"></i> Emplacement</a>';
var titre = '<a type="button" class="button primary boutonMessage" title="Titre non explicite" data-msg="Salut ' +  author + ', :membre:<br><br>J\'ai [B]édité[/B] [FA]fa-pencil-square-o[/FA]le titre de ta discussion pour que celle-ci soit plus [B]compréhensible[/B].<br><br>A l\'avenir essaie de faire des titres plus [B]longs[/B] et [B]détaillés[/B], plus le titre est long et détaillé, plus tu obtiendras de [B]vues[/B] [FA]fa-eye[/FA]  ainsi que des [B]réponses[/B] [FA]fa-comments-o[/FA].:bye:"><i class="fa fa-text-width" aria-hidden="true"></i> Titre</a>';
var resolu = '<a type="button" class="button primary boutonMessage" title="Signaler que le topic est résolu" data-msg="Salut ' + author + ',<br><br>Je déplace ton topic en [color=rgb(0, 179, 0)][b]résolu[/b] [fa]fa-check-circle[/fa][/color]!<br><br>' + signature + '"><i class="fa fa-check-circle" aria-hidden="true"></i> Résolu</a>';
var ask_resolu = '<a type="button" class="button primary boutonMessage" title="Demander si le topic est résolu" data-msg="Salut ' + author + ',<br><br>[color=#00b300][fa]fa-check[/fa][/color] Ton topic est résolu ?<br>[color=#00b300][fa]fa-thumbs-o-up[/fa][/color] Clique sur \'[b][color=#00b300]Cette réponse a résolu mon topic[/color][/b]\' si quelqu\'un a su t\'aider, pour le remercier et pouvoir déplacer ton topic dans la section adéquate.<br><br>[color=#ff0000][fa]fa-bell-o[/fa]Si tu as trouvé la solution tout seul, tu peux la poster[/color].;)<br><br>' + signature + '"><i class="fa fa-check-circle" aria-hidden="true"></i> Résolu ?</a>';
var doublon = '<a type="button" class="button primary boutonMessage" title="Topic en doublon" data-msg="Salut ' + author + ',<br><br>Une discussion très similaire [FA]fa-exchange[/FA]  existe déjà sur le forum.<br>Je déplace donc celle-ci pour cause de doublon [FA]fa-files-o[/FA].<br><br>' + signature + '"><i class="fa fa-comments-o" aria-hidden="true"></i> Doublon</a>';
    
$('#QuickReply').find('.submitUnit').children('input').eq(1).after('' + emplacement + titre + resolu + ask_resolu + '');
  
    $(document).ready(function() {
    $('.boutonMessage').click(function() {
    $('iframe.redactor_textCtrl').contents().find('body').html($(this).data('msg').replace(/\n/g, '<br />'));
    $('iframe.redactor_textCtrl').contents().find('body').select();
    $('iframe.redactor_textCtrl').contents().find('body').focus();
    });
});
});
