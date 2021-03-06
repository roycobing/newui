(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  $("#sidebarCollapse").on("click", function () {
    $("#base-sidebar").toggleClass("active");
  });
})(jQuery);
/** SideNavbar Arrow **/
$(document).ready(function () {
  $(".sidebarCollapse").click(function () {
    $(".rotate").toggleClass("right");
  });
});
/** Dispatch Arrow **/
$(document).ready(function () {
  $(".dispatchscreens_title").click(function () {
    $(".dispatch-rotate").toggleClass("down");
  });
});

$(document).ready(function () {
  $(".dispatches_title").click(function () {
    $(".dispatch-rotate-dispatches").toggleClass("down");
  });
});

$(document).ready(function () {
  $(".skill_title").click(function () {
    $(".dispatch-rotate-skills").toggleClass("down");
  });
});

$(document).ready(function () {
  $(".currentlyopendispatches_title").click(function () {
    $(".dispatch-rotate-currentlyopendispatches").toggleClass("down");
  });
});

$(document).ready(function () {
  $(".dispatchesreported_title").click(function () {
    $(".dispatch-rotate-dispatchesreported").toggleClass("down");
  });
});

/** Dispatch / Performance Mobile View Toggle **/
$(document).ready(function () {
  $(".mobile-screen").on({
    click: function () {
      $(this).toggleClass("selected-nav");
    },
  });
});

$("#sidebarCollapse").on("click", function () {
  if ($("#base-sidebar").hasClass("active")) {
    return $("#base-sidebar").toggleClass("show");
  }
});

$("#burger-menu-button").on("click", function () {
  $("#base-sidebar").removeClass("active");
  $(".rotate").toggleClass("right");
});

/** Modal **/
$(function () {
  $("#sortable").sortable({
    revert: true,
  });
  $("#draggable").draggable({
    connectToSortable: "#sortable",
    helper: "clone",
    revert: "invalid",
  });
  $("ul, li").disableSelection();
});

$(function () {
  $("#sortable2").sortable({
    revert: true,
  });
  $("#draggable").draggable({
    connectToSortable: "#sortable2",
    helper: "clone",
    revert: "invalid",
  });
  $("ul, li").disableSelection();
});

$(function () {
  $("#sortable3").sortable({
    revert: true,
  });
  $("#draggable").draggable({
    connectToSortable: "#sortable2",
    helper: "clone",
    revert: "invalid",
  });
  $("ul, li").disableSelection();
});

// end of Modal
/** Dispatches Screens - Favorite Icon **/
$(document).ready(function () {
  $(document).on("click", ".fa-star", function () {
    $(this).toggleClass("favorite-icon");
  });
});

/** Performance Arrow **/
$(document).ready(function () {
  $(".linesrunning_title").click(function () {
    $(".linesrunning-rotate").toggleClass("down");
  });
});

$(document).ready(function () {
  $(".lines-running-header").on({
    click: function () {
      $(this).toggleClass("selected-nav");
    },
  });
});

$(document).ready(function () {
  $(".on-time-pm-completion-header").on({
    click: function () {
      $(this).toggleClass("selected-nav");
    },
  });
});

$(document).ready(function () {
  $(".ontime_title").click(function () {
    $(".ontime-rotate").toggleClass("down");
  });
});

/** Oee */
$(document).ready(function () {
  $(".oee_title").click(function () {
    $(".oee-rotate").toggleClass("down");
  });
});
$(document).ready(function () {
  $(".oee-header").on({
    click: function () {
      $(this).toggleClass("selected-nav");
    },
  });
});
/** Top Spares */
$(document).ready(function () {
  $(".topspares_title").click(function () {
    $(".topspares-rotate").toggleClass("down");
  });
});

$(document).ready(function () {
  $(".topspares-header").on({
    click: function () {
      $(this).toggleClass("selected-nav");
    },
  });
});

/** Downtime */
$(document).ready(function () {
  $(".downtime_title").click(function () {
    $(".downtime-rotate").toggleClass("down");
  });
});

$(document).ready(function () {
  $(".topspares-header").on({
    click: function () {
      $(this).toggleClass("selected-nav");
    },
  });
});
/** Dispatches - Expand Button */
$(function () {
  $("#expand").on("click", function () {
    $("#dispatch-expand").toggleClass("newClass");
    $(".skills-column").toggleClass("hide");
    $(".weekly-codered").toggleClass("hide");
    $(".weekly-leader").toggleClass("hide");
    $(".weekly-packaging").toggleClass("hide");
    $(".weekly-workorder").toggleClass("hide");
    $(".dispatch-me").toggleClass("hide");
    $(".due").toggleClass("hide");

    $(".divB").toggleClass("hide");
  });
});
/** CloudDispatch.html */
$(document).ready(function () {
  $(".codeRed-main2").hide();

  $(
    ".codeRed-col , .dispatchme , .description-body-codered , .btn.view-plus "
  ).click(function () {
    $(".codeRed-main2").toggle();
    $(".codeRed-main").toggleClass("noborder-bottom");
  });
});

$(document).ready(function () {
  $(
    ".question-title, .spare-title, .tooling-title, .document-title,.actioncomponent-title, .resource-title, .cost-title, .note-title, .attachment-title, .relate-title"
  ).hide();
  $("#sparehistory").hide();
  $("#toolinghistory").hide();
  $("#add-tooling").hide();
  $("#documenthistory").hide();
  $("#externalcost").hide();
  $("#action-btn").hide();
  $("#related-followup").hide();
  $("#attachment-btn").hide();
  $("#addnotes").hide();

  $("#details").click(function () {
    $(".detail-title").show();
    $(
      ".question-title, .spare-title, .tooling-title, .document-title,.actioncomponent-title, .resource-title, .cost-title, .note-title, .attachment-title, .relate-title"
    ).hide();
    $("#sparehistory").hide();
    $("#toolinghistory").hide();
    $("#add-tooling").hide();
    $("#related-followup").hide();
    $("#action-btn").hide();
    $("#dispatchhistory").show();
    $("#documenthistory").hide;
    $("#externalcost").hide();
    $("#attachment-btn").hide();
    $("#addnotes").hide();
  });

  $("#questions").click(function () {
    $(".question-title").show();
    $("#sparehistory").hide();
    $("#dispatchhistory").hide();
    $("#related-followup").hide();
    $("#action-btn").hide();
    $(".savetime, .editdispatch-main , .completeclose-main").show();
    $(
      ".detail-title, .spare-title, .tooling-title, .document-title,.actioncomponent-title, .resource-title, .cost-title, .note-title, .attachment-title, .relate-title"
    ).hide();
    $("#add-tooling").hide();
    $("#addnotes").hide();
  });
  $("#spare").click(function () {
    $(".spare-title").show();
    $("#sparehistory").show();
    $("#toolinghistory").hide();
    $("#dispatchhistory").hide();
    $("#documenthistory").hide();
    $("#request-sparehistory").hide();
    $("#related-followup").hide();
    $("#action-btn").hide();
    $("#add-tooling").hide();
    $(
      ".detail-title, .question-title, .tooling-title, .document-title,.actioncomponent-title, .resource-title, .cost-title, .note-title, .attachment-title, .relate-title"
    ).hide();
    $("#addnotes").hide();
  });
  $("#tool").click(function () {
    $(".tooling-title").show();
    $("#toolinghistory").show();
    $("#add-tooling").show();
    $("#sparehistory").hide();
    $("#dispatchhistory").hide();
    $("#documenthistory").hide();
    $("#related-followup").hide();
    $("#action-btn").hide();
    $("#attachment-btn").hide();
    $("#externalcost").hide();
    $(
      ".detail-title, .question-title, .spare-title, .document-title,.actioncomponent-title, .resource-title, .cost-title, .note-title, .attachment-title, .relate-title"
    ).hide();
    $("#addnotes").hide();
  });
  $("#document").click(function () {
    $(".document-title").show();
    $("#documenthistory").show();
    $("#toolinghistory").hide();
    $("#dispatchhistory").hide();
    $("#related-followup").hide();
    $("#action-btn").hide();
    $("#attachment-btn").hide();
    $("#add-tooling").hide();
    $("#sparehistory").hide();
    $(".savetime, .editdispatch-main , .completeclose-main").show();
    $(
      ".detail-title, .question-title, .spare-title, .tooling-title,.actioncomponent-title, .resource-title, .cost-title, .note-title, .attachment-title, .relate-title"
    ).hide();
    $("#addnotes").hide();
  });
  $("#actioncomponent").click(function () {
    $(".actioncomponent-title").show();
    $("#related-followup").hide();
    $("#action-btn").show();
    $("#documenthistory").hide();
    $("#externalcost").hide();
    $("#dispatchhistory").hide();
    $("#add-tooling").hide();
    $(
      ".detail-title, .question-title, .spare-title, .tooling-title,.document-title, .resource-title, .cost-title, .note-title, .attachment-title, .relate-title"
    ).hide();
    $("#addnotes").hide();
  });
  $("#resource").click(function () {
    $(".resource-title").show();
    $("#related-followup").hide();
    $("#add-tooling").hide();
    $(
      ".detail-title, .question-title, .spare-title, .tooling-title,.document-title, .actioncomponent-title, .cost-title, .note-title, .attachment-title, .relate-title"
    ).hide();
    $("#addnotes").hide();
  });
  $("#cost").click(function () {
    $(".cost-title").show();
    $("#externalcost").show();
    $("#dispatchhistory").hide();
    $("#sparehistory").hide();
    $("#toolinghistory").hide();
    $("#documenthistory").hide();
    $("#related-followup").hide();
    $("#action-btn").hide();
    $("#attachment-btn").hide();
    $("#add-tooling").hide();
    $(
      ".detail-title, .question-title, .spare-title, .tooling-title,.document-title, .actioncomponent-title, .resource-title, .note-title, .attachment-title, .relate-title"
    ).hide();
    $("#addnotes").hide();
  });
  $("#note").click(function () {
    $(".note-title").show();
    $("#related-followup").hide();
    $("#add-tooling").hide();
    $("#dispatchhistory").hide();
    $("#addnotes").show();
    $("#externalcost").hide();
    $(
      ".detail-title, .question-title, .spare-title, .tooling-title,.document-title, .actioncomponent-title, .resource-title, .cost-title, .attachment-title, .relate-title"
    ).hide();
  });
  $("#attachment").click(function () {
    $(".attachment-title").show();
    $("#attachment").show();
    $("#attachment-btn").show();
    $("#dispatchhistory").hide();
    $("#related-followup").hide();
    $("#documenthistory").hide();
    $("#externalcost").hide();
    $("#action-btn").hide();
    $("#add-tooling").hide();
    $(
      ".detail-title, .question-title, .spare-title, .tooling-title,.document-title, .actioncomponent-title, .resource-title, .cost-title, .note-title, .relate-title"
    ).hide();
    $("#addnotes").hide();
  });
  $("#relate").click(function () {
    $(".relate-title").show();
    $("#related-followup").show();
    $("#dispatchhistory").hide();
    $("#action-btn").hide();
    $("#externalcost").hide();
    $("#attachment-btn").hide();
    $("#toolinghistory").hide();
    $("#add-tooling").hide();
    $(
      ".detail-title, .question-title, .spare-title, .tooling-title,.document-title, .actioncomponent-title, .resource-title, .cost-title, .note-title, .attachment-title"
    ).hide();
    $("#addnotes").hide();
  });
});

$(document).ready(function () {
  $(".sparetable-body").hide();
  $(".request-spare-body").hide();
  $("#request-sparehistory").hide();

  $("#btn-requestspare").click(function () {
    $(".request-spare-body").show();
    $("#btn-requestspare , #nosparesyet").hide();
  });

  $("#requestspare-search").click(function () {
    $(".sparetable-body").show();
    $("#btn-requestspare , #nosparesyet").hide();
    $(".request-spare-body").hide();
    $("#request-sparehistory").show();
  });
});

/** Bill of Materials */
$(function () {
  $("tr.parent td").on("click", function () {
    var idOfParent = $(this).parents("tr").attr("id");
    $("tr.child-" + idOfParent).toggle();
  });
  $("tr[class^=child-]").hide().children("td");
});

/** Remove Edit Add Tooling */
$(document).ready(function () {
  $("#removetooling").hide();
  $("#edittooling").hide();
  $("#addtooling").hide();

  $(".remove-tooling").click(function () {
    $("#removetooling").toggle();
  });
  $(".edit-tooling").click(function () {
    $("#edittooling").toggle();
  });
  $("#add-tooling").click(function () {
    $("#addtooling").toggle();
  });
});
/** Documents - Remove */
$(document).ready(function () {
  $("#remove-documents").hide();

  $(".remove-documents").click(function () {
    $("#remove-documents").toggle();
  });
});
/**Costs */
$(document).ready(function () {
  $("#addextermal-cost").hide();
  $("#removeexternal-cost").hide();

  $("#remove-costs").click(function () {
    $("#removeexternal-cost").toggle();
  });
  $("#externalcost").click(function () {
    $("#addextermal-cost").toggle();
  });
});

/**Attachment */

/**Note */
$(document).ready(function () {
  $("#addnotes-body").hide();

  $("#addnotes").click(function () {
    $("#addnotes-body").toggle();
  });
});
/** End of CloudDispatch.html */
/** downoccurence */
$(document).ready(function () {
  $(".downoccurence_title").click(function () {
    $(".downoccurence-rotate").toggleClass("down");
  });
});

/** Production Machine Downtime */
$(document).ready(function () {
  $(".production-machine_title").click(function () {
    $(".production-machine-rotate").toggleClass("down");
  });
});

/** Filter Icon Navbar Button - Setup*/
$(document).ready(function () {
  $(".filterButton-setup").hide();

  $("#filterSetup").click(function () {
    $(".filterButton-setup").toggle();
  });
});

/** Setup.html Table Data */
$(document).ready(function () {
  $(".status-body2").hide();

  $("#statusTable").click(function () {
    $(".status-body2").toggle();
    $(".mainbody-table").hide();
    $(".header-table").hide();
    $(".clouddispatch-navbar").hide();
  });
  $("#save, #save2").click(function () {
    $(".mainbody-table").show();
    $(".header-table").show();
    $(".status-body2").hide();
    $(".clouddispatch-navbar").show();
  });
});

$("#rootCause").click(function () {
  $(".mainBody-status").hide();
  $(".rootcause-button").hide();
});

$("#rootcause-down").click(function () {
  $(".mainBody-status").show();
  $(".rootcause-button").show();
});

$("#rootResources").click(function () {
  $(".fender-3030-body").hide();
  $(".rootresource-button").hide();
});

$("#rootresource-down").click(function () {
  $(".fender-3030-body").show();
  $(".rootresource-button").show();
});
